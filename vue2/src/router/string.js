//发现首页功能选择频道页
const indexOf1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/string/indexOf1");
const indexOf2 = () =>
  import(/* webpackChunkName: "string" */ "@/views/string/indexOf2");
const indexOf3 = () =>
  import(/* webpackChunkName: "string" */ "@/views/string/indexOf3");
const match1 = () =>
  import(/* webpackChunkName: "string" */ "@/views/string/match1");
export default [
  {
    name: "indexOf1",
    path: "/indexOf1",
    component: indexOf1,
  },
  {
    name: "indexOf2",
    path: "/indexOf2",
    component: indexOf2,
  },
  {
    name: "indexOf3",
    path: "/indexOf3",
    component: indexOf3,
  },
  {
    name: "match1",
    path: "/match1",
    component: match1,
  },
];
