export default [
    {
        path: "/communityView",
        name: "communityView",
        component: () => import("@/views/communityView/index.vue"),
        meta: { title: "小区视图[1级]" },
    },
    {
        path: "/communityList",
        name: "communityList",
        component: () => import("@/views/communityView/communityList.vue"),
        meta: { title: "小区视图列表[2级]" },
    },
]