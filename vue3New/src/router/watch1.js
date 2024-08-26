export default [
  {
    path: "/watch1",
    name: "watch1",
    component: () => import("../views/watch/watch1.vue"),
  },
  {
    path: "/watch2",
    name: "watch2",
    component: () => import("../views/watch/watch2.vue"),
  },
  {
    path: "/watch3",
    name: "watch3",
    component: () => import("../views/watch/watch3.vue"),
  },
];
