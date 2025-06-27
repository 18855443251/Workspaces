export default [
  {
    name: "excelDown1",
    path: "/excelDown1",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/excelDown1.vue"),
  },
  {
    name: "excelUpload1",
    path: "/excelUpload1",
    component: () =>
      import(
        /* webpackChunkName: "sort" */ "@/views/fileDown/excelUpload1.vue"
      ),
  },
  {
    name: "txt1",
    path: "/txt1",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/txt1.vue"),
  },
  {
    name: "fileDown1",
    path: "/fileDown1",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/fileDown1.vue"),
  },
  {
    name: "fileDown2",
    path: "/fileDown2",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/fileDown2.vue"),
  },
  {
    name: "fileDown3",
    path: "/fileDown3",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/fileDown3.vue"),
  },
  {
    name: "fileDown4",
    path: "/fileDown4",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/fileDown4.vue"),
  },
  {
    name: "fileDown5",
    path: "/fileDown5",
    component: () =>
      import(/* webpackChunkName: "sort" */ "@/views/fileDown/fileDown5.vue"),
  },
];
