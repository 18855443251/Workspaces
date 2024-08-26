/*
 * @Author: your name
 * @Date: 2022-06-02 10:47:23
 * @LastEditTime: 2022-06-02 10:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\slot.js
 */ // 正则处理
export default [{
    name: "slot1",
    path: "/slot1",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/slot/slot1.vue"),
},{
    name: "slot2",
    path: "/slot2",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/slot/slot2.vue"),
},{
    name: "slot3",
    path: "/slot3",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/slot/slot3.vue"),
},{
    name: "slot4",
    path: "/slot4",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/slot/slot4.vue"),
},{
    name: "slot5",
    path: "/slot5",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/slot/slot5.vue"),
},{
    name: "slot6",
    path: "/slot6",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/slot/slot6.vue"),
}, ]