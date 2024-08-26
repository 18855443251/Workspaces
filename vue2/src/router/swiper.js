/*
 * @Author: your name
 * @Date: 2021-08-12 15:18:25
 * @LastEditTime: 2021-09-30 09:49:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\swiper.js
 */
// 正则处理
export default [
  {
    name: "swiper1",
    path: "/swiper1",
    component: () =>
      import(/* webpackChunkName: "swiper" */ "@/views/swiper/swiper1.vue"),
  },
  {
    name: "swiper2",
    path: "/swiper2",
    component: () =>
      import(/* webpackChunkName: "swiper" */ "@/views/swiper/swiper2.vue"),
  },
  {
    name: "swiper3",
    path: "/swiper3",
    component: () =>
      import(/* webpackChunkName: "swiper" */ "@/views/swiper/swiper3.vue"),
  },
  {
    name: "swiper4",
    path: "/swiper4",
    component: () =>
      import(/* webpackChunkName: "swiper" */ "@/views/swiper/swiper4.vue"),
  },
  {
    name: "swiper5",
    path: "/swiper5",
    component: () =>
      import(/* webpackChunkName: "swiper" */ "@/views/swiper/swiper5.vue"),
  },
];
