export default [
  {
    path: "/table1",
    name: "table1",
    component: () => import("@/views/table/table1.vue"),
    meta: { title: "中小微客户沙盘平台[1级]" },
  },
  {
    path: "/table2",
    name: "table2",
    component: () => import("@/views/table/table2.vue"),
    meta: { title: "中小微客户沙盘平台[1级]" },
  },
  {
    path: "/table3",
    name: "table3",
    component: () => import("@/views/table/table3.vue"),
    meta: { title: "中小微客户沙盘平台[1级]" },
  },
];
