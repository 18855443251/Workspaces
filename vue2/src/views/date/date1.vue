<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-25 09:49:55
 * @LastEditors: Please set LastEditors
 * @Description:时间跨度不超过三个月
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div>日期</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    console.log(this.getCurrMonthLastDay(2023, 2));
     console.log(this.getPervMonthLastDay(2024, 2));
  },
  methods: {},
};
</script>

<style scoped></style>
