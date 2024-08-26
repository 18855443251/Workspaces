/*
 * @Author: your name
 * @Date: 2021-09-13 15:28:29
 * @LastEditTime: 2021-09-13 15:28:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\css.js
 */
export default [{
    name: "h1",
    path: "/h1",
    component: () => import( /* webpackChunkName: "date" */ "@/views/html/h1.vue"),
},
{
    name: "flex1",
    path: "/flex1",
    component: () => import( /* webpackChunkName: "date" */ "@/views/html/flex1.vue"),
},
{
    name: "flex2",
    path: "/flex2",
    component: () => import( /* webpackChunkName: "date" */ "@/views/html/flex2.vue"),
},
{
    name: "flex3",
    path: "/flex3",
    component: () => import( /* webpackChunkName: "date" */ "@/views/html/flex3.vue"),
},
{
    name: "flex4",
    path: "/flex4",
    component: () => import( /* webpackChunkName: "date" */ "@/views/html/flex4.vue"),
},
{
    name: "flex5",
    path: "/flex5",
    component: () => import( /* webpackChunkName: "date" */ "@/views/html/flex5.vue"),
}]