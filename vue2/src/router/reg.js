// 正则处理
export default [{
    name: "replace1",
    path: "/replace1",
    component: () =>
      import( /* webpackChunkName: "rep" */ "@/views/reg/replace1.vue"),
  },
  {
    name: "reg1",
    path: "/reg1",
    component: () =>
      import( /* webpackChunkName: "rep" */ "@/views/reg/reg1.vue"),
  },
  {
    name: "reg2",
    path: "/reg2",
    component: () =>
      import( /* webpackChunkName: "rep" */ "@/views/reg/reg2.vue"),
  },
];