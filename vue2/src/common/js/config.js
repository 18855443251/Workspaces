import Vue from "vue";
const userArr = [
  // 转账用途
  {
    text: "手机银行转账",
  },
  {
    text: "工资",
  },
  {
    text: "手工录入",
  },
];
const typeArr = [
  {
    value: "M",
    text: "最低还款",
  },
  {
    value: "F",
    text: "全额还款",
  },
];
export { userArr, typeArr };
export const configArr = [
  { value: 0, label: "不启用" },
  { value: 1, label: "启用黑名单" },
  { value: 2, label: "启用白名单" },
];
Vue.prototype.$tableMapList = (val) => {
  if (val) {
    return val;
  } else {
    return "--";
  }
};
