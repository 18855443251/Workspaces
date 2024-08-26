// 正则处理
export default [
  // params1后面的参数可传可不传
  {
    name: "params1",
    path: "/params1/:name?",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/params1.vue"),
  },
  {
    name: "query1",
    path: "/query1",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/query1.vue"),
  },
  {
    name: "routerQ1",
    path: "/routerQ1",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/routerQ1.vue"),
    meta: {
      isLogin: true,
    },
  },
  {
    name: "routerP1",
    path: "/routerP1",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/routerP1.vue"),
    meta: {
      isLogin: true,
    },
  },

  {
    name: "user1",
    path: "/user1/:username",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/user1.vue"),
    children: [
      {
        name: "uesrSon1",
        path: "uesrSon1",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/uesrSon1.vue"),
      },
    ],
  },
  {
    name: "main",
    path: "/main",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/main.vue"),
    redirect: {
      path: "/main/right",
    },
    children: [
      {
        name: "left",
        path: "left",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/left.vue"),
      },
      {
        name: "right",
        path: "right",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/right.vue"),
      },
      {
        name: "mainDetail",
        path: "mainDetail/:id",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/mainDetail.vue"),
      },
    ],
  },
  {
    name: "detail",
    path: "/detail/:username/ages/:age",
    meta: {
      title: "详情页面",
      keepAlive: true, // 不需要缓存
      isAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/router/detail.vue"),
  },
];
