/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-05 16:55:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\src\router\my.js
 */
const lifeCycle1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/lifeCycle/lifeCycle1.vue"); // 通讯录
const lifeCycle2 = () =>
  import(/* webpackChunkName: "my" */ "@/views/lifeCycle/lifeCycle2.vue"); // 通讯录
export default [
  {
    name: "lifeCycle1",
    path: "/lifeCycle1",
    component: lifeCycle1,
    meta: {
      title:"生命周期",
      keepAlive: true, // 需要缓存
    },
  },
  {
    name: "lifeCycle2",
    path: "/lifeCycle2",
    component: lifeCycle2,
  },
];
