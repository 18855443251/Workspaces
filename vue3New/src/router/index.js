import { createRouter, createWebHistory } from "vue-router";
import watch1 from "./watch1.js";
import computed1 from "./computed1.js";
import zujian from "./zujian.js";
import stores1 from "./stores1.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("../views/router/layout/index.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/router/home/index.vue"),
        },
        {
          path: "category/:id",
          name: "category",
          component: () => import("../views/router/category/index.vue"),
        },
        {
          path: "category/sub/:id",
          name: "subCategory",
          component: () => import("../views/router/subCategory/index.vue"),
        },
        {
          path: "member",
          name: "member",
          component: () => import("../views/router/member/index.vue"),
          children: [
            {
              path: "",
              name: "userInfo",
              component: () =>
                import("../views/router/member/components/userInfo.vue"),
            },
            {
              path: "userOrder",
              name: "userOrder",
              component: () =>
                import("../views/router/member/components/userOrder.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/basic",
      name: "basic",
      component: () => import("../views/basic.vue"),
    },
    ...watch1,
    ...computed1,
    ...zujian,
    ...stores1,
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
