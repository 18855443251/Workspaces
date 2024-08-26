/*
 * @Author: your name
 * @Date: 2022-03-19 15:09:25
 * @LastEditTime: 2022-05-12 11:09:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\json.js
 */
export default [
  {
    name: "json1",
    path: "/json1",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json1.vue"),
  },
  {
    name: "json2",
    path: "/json2",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json2.vue"),
  },
  {
    name: "json3",
    path: "/json3",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json3.vue"),
  },
  {
    name: "json4",
    path: "/json4",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json4.vue"),
  },
  {
    name: "json5",
    path: "/json5",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json5.vue"),
  },
  {
    name: "json6",
    path: "/json6",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json6.vue"),
  },
  {
    name: "json7",
    path: "/json7",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/json7.vue"),
  },
  {
    name: "bankList",
    path: "/bankList",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/bankList.vue"),
  },
  {
    name: "bankList1",
    path: "/bankList1",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/json/bankList1.vue"),
  },
  {
    name: "axios1",
    path: "/axios1",
    component: () =>
      import(/* webpackChunkName: "json" */ "@/views/axios/axios1.vue"),
  },
];
