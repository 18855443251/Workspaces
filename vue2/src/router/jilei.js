export default [
  {
    name: "selector1",
    path: "/selector1",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/jilei/selector1.vue"),
  },
  {
    name: "popup1",
    path: "/popup1",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/jilei/popup1.vue"),
  },
  {
    name: "date-picker1",
    path: "/date-picker1",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/jilei/date-picker1.vue"),
  },
];
