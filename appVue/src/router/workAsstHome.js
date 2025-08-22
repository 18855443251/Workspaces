export default [
    {
        name: 'workAsstHome',
        path: '/workAsstHome',
        component: () => import("@/views/workAsstHome/index"),
        meta: {
            title: "工作助手[首页]"
        }
    },
    {
        name: 'shouye',
        path: '/shouye',
        component: () => import("@/views/workAsstHome/components/shouye"),
        meta: {
            title: "工作助手[首页]"
        }
    },
    {
        name: 'my',
        path: '/my',
        component: () => import("@/views/workAsstHome/components/my"),
        meta: {
            title: "工作助手[我的]"
        }
    },
    {
        name: 'notice',
        path: '/notice',
        component: () => import("@/views/workAsstHome/components/notice"),
        meta: {
            title: "通知"
        }
    },

]