// 正则处理
export default [
  // params1后面的参数可传可不传
  {
    name: "params1",
    path: "/params1/:userName?",
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
    // path: "/routerP1-*", // 会匹配以 `/routerP1-` 开头的任意路径
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/routerP1.vue"),
    meta: {
      isLogin: true,
    },
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
    path: "/main",//一定要添加/
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/main.vue"),
    redirect: {
      path: "/main/right",
    },//默认展示右边
    children: [
      {
        name: "left",
        path: "left",//不用添加/
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
    name: "breadcrumbFather",
    path: "/breadcrumbFather",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/breadcrumbFather.vue"),
  },
  // {
  //   path: '/products',
  //   name: 'Products',
  //   component: () => import('@/views/router/Products.vue'),
  //   meta: { breadcrumb: '产品' }
  // },
  // {
  //   path: '/products/:id',
  //   name: 'ProductDetail',
  //   component: () => import('@/views/router/ProductDetail.vue'),
  //   meta: {
  //     breadcrumb: '产品详情',
  //     title: '产品详情' // 备用标签源
  //   }
  // }
];
