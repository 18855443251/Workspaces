export default [
    {
        name: "websocket1",
        path: "/websocket1",
        component: () => import( /* webpackChunkName: "swiper" */ "@/views/websocket/websocket1.vue"),
    },
    {
        name: "websocket2",
        path: "/websocket2",
        component: () => import( /* webpackChunkName: "swiper" */ "@/views/websocket/websocket2.vue"),
    },
]