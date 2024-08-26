<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 15:10:26
 * @LastEditors: Please set LastEditors
 * @Description:正则
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
-->
<template>
  <div>
    <div v-for="(item, index) in numList" :key="index">
      <!-- 如果numList没有num1这个字段,直接item.num1.replace(/,/g, "")会报错 -->
      <div>去掉逗号:25,515,654.89->{{ item.num1 && item.num1.replace(/,/g, "") }}</div>
    </div>
    <div>去掉除数字以外的符号：{{ num2.replace(/[^\d]/g, "") }}</div>
    <div>去掉空格{{ num3.replace(/[\s]/g, "") }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      numList: [
        {
          num1: "25,515,654.89",
        },
      ],
      num2: "e2666，S85.22]:2",
      num3: "55 699 2",
    };
  },
  created() {
    var a = "非官方<mark>活动</mark>让他";
    let b = a.replace(/\<\/?mark\>/g, "");
    console.log(b); //非官方活动让他
  },
  methods: {},
};
</script>

<style scoped></style>
