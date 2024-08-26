/*
 * @Author: your name
 * @Date: 2022-06-17 10:53:51
 * @LastEditTime: 2022-06-17 14:36:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\promise.js
 */

const promise4 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/promise4");
const promise5 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/promise5");
const await4 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/await4");
const await5 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/await5");
const await6 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/await6");
const then1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/then1");
const then2 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/then2");
const catch1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/catch1");
const all1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/all1");
const race1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/race1");
const await1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/await1");
const await2 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/await2");
const await3 = () =>
  import(/* webpackChunkName: "string" */ "@/views/promise/await3");
export default [
  {
    name: "promise4",
    path: "/promise4",
    component: promise4,
  },
  {
    name: "promise5",
    path: "/promise5",
    component: promise5,
  },
  {
    name: "await4",
    path: "/await4",
    component: await4,
  },
  {
    name: "await5",
    path: "/await5",
    component: await5,
  },
  {
    name: "await6",
    path: "/await6",
    component: await6,
  },
  {
    name: "then1",
    path: "/then1",
    component: then1,
  },
  {
    name: "then2",
    path: "/then2",
    component: then2,
  },
  {
    name: "catch1",
    path: "/catch1",
    component: catch1,
  },
  {
    name: "all1",
    path: "/all1",
    component: all1,
  },
  {
    name: "race1",
    path: "/race1",
    component: race1,
  },
  {
    name: "await1",
    path: "/await1",
    component: await1,
  },
  {
    name: "await2",
    path: "/await2",
    component: await2,
  },
  {
    name: "await3",
    path: "/await3",
    component: await3,
  },
];
