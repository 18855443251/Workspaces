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
];
