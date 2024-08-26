export default [
  {
    path: "/stores1",
    name: "stores1",
    component: () => import("../views/stores/stores1.vue"),
  },
  {
    path: "/stores2",
    name: "stores2",
    component: () => import("../views/stores/stores2.vue"),
  },
];
