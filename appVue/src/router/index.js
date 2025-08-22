import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
import loginRouter from "./login.js";//登录
import workAsstHomeRouter from "./workAsstHome.js";//工作助手首页
const routes = [
  {
    name: 'theme',
    path: '/theme',
    component: () => import("@/views/theme.vue"),
    meta: {
      title: "登录[1级]"
    }
  },
  {
    path: "/",
    redirect: "/login",
  },

  ...loginRouter,
  ...workAsstHomeRouter,
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 路由后退/前进时,滚动条复位到原位置
      return savedPosition
    } else {
      // 路由切换时滚动条复位到顶部
      return {
        x: 0,
        y: 0
      }
    }
  },
})
NProgress.configure({
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next();
});
router.afterEach(() => {
  NProgress.done()
})
export default router