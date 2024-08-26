/*
 * @Author: your name
 * @Date: 2020-11-30 10:18:08
 * @LastEditTime: 2021-09-28 16:13:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weex\src\router.js
 */
// import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '@/views/home.vue' //消息
import call from '@/views/call.vue' //消息
import input from '@/views/input.vue' //消息
import wyhHome from '@/views/wyhHome.vue' //消息
import verifiyCodeSMS from '@/views/verifiyCodeSMS.vue' //短信验证码
import lunbo1 from '@/views/lunbo1.vue' //左右轮播
import lunbo2 from '@/views/lunbo2.vue' //上下轮播
import delete1 from '@/views/delete1.vue' //
import erweima from '@/views/erweima.vue' //左滑删除
import login from '@/views/login.vue' //
import img from '@/views/img.vue' //

let routerSwitch = true

const routes = [{
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/call',
    name: 'call',
    component: call,
  },
  {
    path: '/input',
    name: 'input',
    component: input,
  },
  {
    path: '/verifiyCodeSMS',
    name: 'verifiyCodeSMS',
    component: verifiyCodeSMS,
  },
  {
    path: '/wyhHome',
    name: 'wyhHome',
    component: wyhHome,
  },
  {
    path: '/lunbo1',
    name: 'lunbo1',
    component: lunbo1,
  },
  {
    path: '/lunbo2',
    name: 'lunbo2',
    component: lunbo2,
  },
  {
    path: '/delete1',
    name: 'delete1',
    component: delete1,
  },
  {
    path: '/erweima',
    name: 'erweima',
    component: erweima,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/img',
    name: 'img',
    component: img,
  },
  {
    path: '/',
    redirect: 'home'
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (routerSwitch) {
    router.indexRouter = to.path
    routerSwitch = false
  }
  next()
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router