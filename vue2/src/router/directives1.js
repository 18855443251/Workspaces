export default [
  {
    name: "directives1",
    path: "/directives1",
    component: () =>
      import(
        /* webpackChunkName: "fenye" */ "@/views/directives/directives1.vue"
      ),
  },
  {
    name: "directives2",
    path: "/directives2",
    component: () =>
      import(
        /* webpackChunkName: "fenye" */ "@/views/directives/directives2.vue"
      ),
  },
  {
    name: "directives3",
    path: "/directives3",
    component: () =>
      import(
        /* webpackChunkName: "fenye" */ "@/views/directives/directives3.vue"
      ),
  },
  {
    name: "directives4",
    path: "/directives4",
    component: () =>
      import(
        /* webpackChunkName: "fenye" */ "@/views/directives/directives4.vue"
      ),
  },
];
