/*
 * @Author: your name
 * @Date: 2021-11-24 14:27:41
 * @LastEditTime: 2022-01-17 15:47:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\date.js
 */
export default [{
    name: "date1",
    path: "/date1",
    component: () => import( /* webpackChunkName: "date" */ "@/views/date/date1.vue"),
  },
  {
    name: "formatDate",
    path: "/formatDate",
    component: () => import( /* webpackChunkName: "date" */ "@/views/date/formatDate.vue"),
  }, {
    name: "datemethod",
    path: "/datemethod",
    component: () => import( /* webpackChunkName: "date" */ "@/views/date/datemethod.vue"),
  }, {
    name: "payroll",
    path: "/payroll",
    component: () => import( /* webpackChunkName: "date" */ "@/views/date/payroll.vue"),
  }, {
    name: "dateStandar",
    path: "/dateStandar",
    component: () => import( /* webpackChunkName: "date" */ "@/views/date/dateStandar.vue"),

  }
]