/*
 * @Author: your name
 * @Date: 2022-06-02 10:47:23
 * @LastEditTime: 2022-06-02 10:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\slot.js
 */ // 时间
export default [
    {
        name: "video1",
        path: "/video1",
        component: () =>
            import(/* webpackChunkName: "rep" */ "@/views/video/video1.vue"),
    },
];
