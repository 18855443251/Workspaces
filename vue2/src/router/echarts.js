export default [
    {
        name: "echarts1",
        path: "/echarts1",
        component: () =>
            import(/* webpackChunkName: "fenye" */ "@/views/echarts/echarts1.vue"),
    },
     {
        name: "echarts2",
        path: "/echarts2",
        component: () =>
            import(/* webpackChunkName: "fenye" */ "@/views/echarts/echarts2.vue"),
    },
]