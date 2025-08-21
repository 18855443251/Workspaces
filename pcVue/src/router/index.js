import Vue from "vue";
import Router from "vue-router";
import treeRouter from "./tree.js";//中小微客户沙盘平台
Vue.use(Router);
export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/img1",
      name: "img1",
      component: () => import("@/views/img1.vue"),
      meta: { title: "图片" },
    },
    {
      path: "/paomadeng",
      name: "paomadeng",
      component: () => import("@/views/paomadeng.vue"),
      meta: { title: "图片" },
    },
    {
      path: "/",
      redirect: "/paomadeng",
    },
    ...treeRouter,
  ],
  scrollBehavior: () => ({ y: 0 }), // 当跳到新的页面的时候 自动跳到该页面的顶部
});
