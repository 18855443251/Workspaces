/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-05 16:55:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\src\router\my.js
 */
const error = () => import( /* webpackChunkName: "my" */ '@/views/VxMobile.vue') // 通讯录

export default [{
    name: "VxMobile",
    path: "/VxMobile",
    component: VxMobile,
}, ]