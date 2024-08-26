/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-05 16:55:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\src\router\my.js
 */
const mixins1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/mixins/mixins1.vue"); // 通讯录
const mixins2 = () =>
  import(/* webpackChunkName: "my" */ "@/views/mixins/mixins2.vue"); // 通讯录
const mixins3 = () =>
  import(/* webpackChunkName: "my" */ "@/views/mixins/mixins3.vue"); // 通讯录
export default [
  {
    name: "mixins1",
    path: "/mixins1",
    component: mixins1,
  },
  {
    name: "mixins2",
    path: "/mixins2",
    component: mixins2,
  },
  {
    name: "mixins3",
    path: "/mixins3",
    component: mixins3,
  },
];
