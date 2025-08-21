export default [
    {
        name: 'login',
        path: '/login',
        component: () => import("@/views/login/index"),
        meta: {
            title: "登录[1级]"
        }
    },
]