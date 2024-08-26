// 第一种写法
// import Vue from 'vue';
// Vue.filter("changeStr", function (str) {
//   if (str) {
//     return splitZero(str);
//   } else {
//     return "--";
//   }
// });
// Vue.filter("changeText", function (str) {
//   if (str) {
//     return '改变文本';
//   } else {
//     return "--";
//   }
// });
// let splitZero = (str) => {
//   if (str > 2) {
//     return '大于二';
//   } else {
//     return "小于2";
//   }
// };
// 第二种方式 过滤器单独分开写，没有放在同一个index.ji里面
import formatCard from "./card";
import formatMoney from "./money";
import formatDate from "./date";
import formatPhone from "./phone";
export default {
  ...formatCard,
  ...formatMoney,
  ...formatDate,
  ...formatPhone,
  meritPart(val) {
    let map = {
      AXY01: "考核期经济利润（EVA）",
      BOT22: "科技贷款首贷",
    };
    return map[val];
  },
  listMap(List, value, custValue, custText) {
    console.log(List);
    let obj = {};
    // List.forEach((item) => {
    //   obj[item[custValue || "value"]] = item[custText || "text"];
    // });
    // return obj[value] || value || "";
  },
};
