// 正则处理
export default [
  {
    name: "layout",
    path: "/layout",
    component: () =>
      import(
        /* webpackChunkName: "swiper" */ "@/views/secondRouter/layout/index.vue"
      ),
    children: [
      {
        name: "",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "swiper" */ "@/views/secondRouter/home/index.vue"
          ),
      },
      {
        name: "category/:id",
        path: "category/:id",
        component: () =>
          import(
            /* webpackChunkName: "swiper" */ "@/views/secondRouter/layout/index.vue"
          ),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () =>
      import(
        /* webpackChunkName: "swiper" */ "@/views/secondRouter/login/index.vue"
      ),
  },
];
