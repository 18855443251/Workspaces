export default [
  {
    name: "animation1",
    path: "/animation1",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/animation/animation1.vue"),//按需异步加载
  }, 
    {
    name: "animation2",
    path: "/animation2",
    component: () => import( /* webpackChunkName: "fenye" */ "@/views/animation/animation2.vue"),//按需异步加载
  }, 
]
  