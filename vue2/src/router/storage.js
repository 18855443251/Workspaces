/*
 * @Author: your name
 * @Date: 2021-08-12 15:18:25
 * @LastEditTime: 2021-09-30 09:49:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\swiper.js
 */
// 正则处理
export default [{
    name: "localStorage1",
    path: "/localStorage1",
    component: () => import( /* webpackChunkName: "swiper" */ "@/views/storage/localStorage1.vue"),
  },
  {
    name: "sesstionStorage1",
    path: "/sesstionStorage1",
    component: () => import( /* webpackChunkName: "swiper" */ "@/views/storage/sesstionStorage1.vue"),
  }]