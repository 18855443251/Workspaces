export default [{
    name: "animation1",
    path: "/animation1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/animation/animation1.vue"),//按需异步加载
  }, ]
  