import Vue from "vue";
import Router from "vue-router";
import activityRouter from "./activity.js";//我的活动
import customerSandboxRouter from "./customerSandbox.js";//中小微客户沙盘平台
import communityViewRouter from "./communityView.js";//小区视图
Vue.use(Router);
export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/operationLog",
      name: "operationLog",
      component: () => import("@/views/operationLog/index.vue"),
      meta: { title: "操作日志" },
    },
    {
      path: "/",
      redirect: "/activity",
    },
    ...activityRouter,
    ...customerSandboxRouter,
    ...communityViewRouter
  ],
  scrollBehavior: () => ({ y: 0 }), // 当跳到新的页面的时候 自动跳到该页面的顶部
});
