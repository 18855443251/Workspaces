//发现首页功能选择频道页
// 状态存储
import store1 from "@/views/store/store1";
import store2 from "@/views/store/store2";
import store3 from "@/views/store/store3";
import store4 from "@/views/store/store4";
export default [
  {
    name: "store1",
    path: "/store1",
    component: store1,
  },
  {
    path: "/store2",
    name: "store2",
    component: store2,
  },
  {
    path: "/store3",
    name: "store3",
    component: store3,
  },
  {
    path: "/store4",
    name: "store4",
    component: store4,
  },
];
