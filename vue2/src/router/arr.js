/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-25 10:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\src\router\my.js
 */
const arr1 = () => import(/* webpackChunkName: "my" */ "@/views/arr/arr1.vue"); // 通讯录
const arr2 = () => import(/* webpackChunkName: "my" */ "@/views/arr/arr2.vue"); // 通讯录
const arr3 = () => import(/* webpackChunkName: "my" */ "@/views/arr/arr3.vue"); // 通讯录
const ArrayPrototype = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/ArrayPrototype.vue"); // 通讯录
const arrbianli = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/arrbianli.vue"); // 通讯录
const map1 = () => import(/* webpackChunkName: "my" */ "@/views/arr/map1.vue"); // 通讯录
const map2 = () => import(/* webpackChunkName: "my" */ "@/views/arr/map2.vue"); //
const map3 = () => import(/* webpackChunkName: "my" */ "@/views/arr/map3.vue"); // 通讯录
const map4 = () => import(/* webpackChunkName: "my" */ "@/views/arr/map4.vue"); // 通讯录
const forEach1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/forEach1.vue"); // 通讯录
const throw1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/throw1.vue"); // 通讯录
const throw2 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/throw2.vue"); // 通讯录
const join1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/join1.vue"); // 通讯录
const split1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/split1.vue"); // 通讯录
const slice1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/slice1.vue"); // 通讯录
const splice1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/splice1.vue"); // 通讯录
const find1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/find1.vue"); // 通讯录
const filter1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/filter1.vue"); // 通讯录
const flat1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/flat1.vue"); // 通讯录
const reduce1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/reduce1.vue"); // 通讯录
const reduce2 = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/reduce2.vue"); // 通讯录
const at = () => import(/* webpackChunkName: "my" */ "@/views/arr/at.vue"); // 通讯录
const cancat = () =>
  import(/* webpackChunkName: "my" */ "@/views/arr/cancat.vue"); // 通讯录
export default [
  {
    name: "arr1",
    path: "/arr1",
    component: arr1,
  },
  {
    name: "arr2",
    path: "/arr2",
    component: arr2,
  },
  {
    name: "arr3",
    path: "/arr3",
    component: arr3,
  },
  {
    name: "ArrayPrototype",
    path: "/ArrayPrototype",
    component: ArrayPrototype,
  },
  {
    name: "arrbianli",
    path: "/arrbianli",
    component: arrbianli,
  },
  {
    name: "map1",
    path: "/map1",
    component: map1,
  },
  {
    name: "map2",
    path: "/map2",
    component: map2,
  },
  {
    name: "map3",
    path: "/map3",
    component: map3,
  },
  {
    name: "map4",
    path: "/map4",
    component: map4,
  },
  {
    name: "forEach1",
    path: "/forEach1",
    component: forEach1,
  },
  {
    name: "throw1",
    path: "/throw1",
    component: throw1,
  },
  {
    name: "throw2",
    path: "/throw2",
    component: throw2,
  },
  {
    name: "join1",
    path: "/join1",
    component: join1,
  },
  {
    name: "split1",
    path: "/split1",
    component: split1,
  },
  {
    name: "slice1",
    path: "/slice1",
    component: slice1,
  },
  {
    name: "splice1",
    path: "/splice1",
    component: splice1,
  },
  {
    name: "find1",
    path: "/find1",
    component: find1,
  },
  {
    name: "filter1",
    path: "/filter1",
    component: filter1,
  },
  {
    name: "flat1",
    path: "/flat1",
    component: flat1,
  },
  {
    name: "reduce1",
    path: "/reduce1",
    component: reduce1,
  },
  {
    name: "reduce2",
    path: "/reduce2",
    component: reduce2,
  },
  {
    name: "at",
    path: "/at",
    component: at,
  },
  {
    name: "cancat",
    path: "/cancat",
    component: cancat,
  },
  {
    name: "forEach2",
    path: "/forEach2",
    component: () =>
      import(/* webpackChunkName: "my" */ "@/views/arr/forEach2.vue"),
  },
  {
    name: "forEach3",
    path: "/forEach3",
    component: () =>
      import(/* webpackChunkName: "my" */ "@/views/arr/forEach3.vue"),
  },
];
