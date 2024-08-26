/*
 * @Author: your name
 * @Date: 2020-12-24 11:03:18
 * @LastEditTime: 2021-08-23 11:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\router\shijian.js
 */
export default [{
    name: "shijian1",
    path: "/shijian1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/shijian1.vue"),
  }, {
    name: "shijian2",
    path: "/shijian2",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/shijian2.vue"),
  }, {
    name: "shijian3",
    path: "/shijian3",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/shijian3.vue"),
  }, {
    name: "stopPropagation",
    path: "/stopPropagation",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/stopPropagation.vue"),
  }, {
    name: "stopPropagation1",
    path: "/stopPropagation1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/stopPropagation1.vue"),
  },
  {
    name: "preventDefault",
    path: "/preventDefault",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/preventDefault.vue"),
  }, {
    name: "target",
    path: "/target",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/target.vue"),
  }, {
    name: "offset",
    path: "/offset",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/offset.vue"),
  }, {
    name: "offset1",
    path: "/offset1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/offset1.vue"),
  }, {
    name: "scroller",
    path: "/scroller",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/scroller.vue"),
  },
  {
    name: "scroller1",
    path: "/scroller1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/scroller1.vue"),
  },{
    name: "client1",
    path: "/client1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/client1.vue"),
  }, {
    name: "client2",
    path: "/client2",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/client2.vue"),
  }, {
    name: "resize",
    path: "/resize",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/resize.vue"),
  }, {
    name: "keyup",
    path: "/keyup",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/keyup.vue"),
  },
  {
    name: "getBoundingClientRect1",
    path: "/getBoundingClientRect1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/shijian/getBoundingClientRect1.vue"),
  }
]