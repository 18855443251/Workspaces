export default [
  {
    name: "window1",
    path: "/window1",
    component: () => import( /* webpackChunkName: "swiper" */ "@/views/window/window1.vue"),
  },
  {
    name: "window2",
    path: "/window2",
    component: () => import( /* webpackChunkName: "swiper" */ "@/views/window/window2.vue"),
  },
]