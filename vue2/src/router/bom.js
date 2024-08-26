/*
 * @Author: your name
 * @Date: 2021-07-27 09:40:11
 * @LastEditTime: 2021-08-23 10:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\router\map.js
 */
export default [{
    name: "userAgent",
    path: "/userAgent",
    component: () => import( /* webpackChunkName: "date" */ "@/views/bom/userAgent.vue"),
}]