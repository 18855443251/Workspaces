<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 14:27:29
 * @LastEditors: Please set LastEditors
 * @Description: 金额格式化
 * @FilePath: \vueDemo\src\views\money\formatMoney.vue
-->
<template>
  <div>
    <div>金额大写:{{ money | amountCapital }}</div>
    <div>金额大写:{{ money1 | changeMoneyToChinese }}</div>
    <div>moneyFilter:{{ money2 | moneyFilter }}</div>
    <div>单位换算:{{ money8 | changeAmountUnit }}</div>
    <div>保留两位小数:123.456758->{{ money3.toFixed(2) }}</div>
    <div>保留三位小数: 8765.4321->{{ money4.toFixed(3) }}</div>
    <div>保留整数:129.6->{{ money5.toFixed(0) }}</div>
    <div>保留两位小数:{{ money6 | showLastTwo }}</div>
    <div>整数千分位:{{ money7 | addComma }}</div>
    <div>四舍五入保留整数：{{ money9 | baoliu }}</div>
    <div>202->{{ money10 | capitalizate }}</div>
    <div>金额计算精度丢失并求和：{{ computMoney(moneyList) }}</div>
    <div>{{ money11 | NumFormat }}</div>
    <div>两数相减：{{ computMoney1("458.75", "451.4", "-") }}</div>
    <div>两数相加：{{ computMoney1("0.1", "0.2", "+") }}</div>
    <div>两数相乘：{{ computMoney1("0.02", "0.0345", "*") }}</div>
    <div>两数相除：{{ computMoney1("0.035", "0.2", "/") }}</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      money: "5684749361699.36",
      money1: "485635789421563825633.96",
      money2: "130634.096",
      // 表示对123.456758四舍五入后取2位小数
      money3: 123.456758,
      //  表示对8765.4321四舍五入后取3位小数
      money4: 8765.4321,
      money5: 129.6,
      money6: "1259656.0689",
      money7: "12596568622255466",
      money8: "658852",
      money9: "201.5658",
      money10: "202",
      money11: "123456789645632154853.599",
      // 20个6.66是133.2  但在控制台运算是133.19999999999996，处理精度丢失
      moneyList: [
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
        { Amount: "6.66" },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
