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
    <div>{{ date1 | formatDate }}</div>
    <div>{{ date1 | dealTime }}</div>
    <div>{{ date2 | formatDate1 }}</div>
    <div>{{ date3 | dealweek }}</div>
    <div>{{ date4 | FormattedCurDate }}</div>
    <div>{{ date5 | dateStatus }}</div>
    <div>{{ time | formatMonth }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      date1: "20131103",
      date2: "201808091213",
      date3: "3",
      date4: "",
      date5: "2023-11-09 08:22:44",
      time: 1699499832107,
    };
  },
  created() {
    var startDate = "2019-02-28";
    var endDate = "2019-05-29";
    this.checkTime(startDate, endDate);
    // 时间戳必须是数字
    console.log(new Date(1612922019029)); //Wed Feb 10 2021 09:53:39 GMT+0800 (中国标准时间)
    console.log(new Date("1612922019029")); //Invalid Date
    // if (!this.checkTime(startDate, endDate)) {
    //   //需要发的交易
    //   console.log("时间跨度不得超过三个月");
    // }
    this.test()
  },
  methods: {
    test() {
      console.log(this.formatDayChina([1]));
      console.log(this.formatDayChina([1, 2]));
      console.log(this.formatDayChina([1, 2, 3]));
      console.log(this.formatDayChina([1, 2, 3, 4]));
      console.log(this.formatDayChina([1, 2, 3, 4, 5]));
      console.log(this.formatDayChina([1, 2, 3, 4, 5, 6]));
      console.log(this.formatDayChina([1, 2, 3, 4, 5, 6, 7]));
      console.log(this.formatDayChina([1, 2, 3, 4, 6, 7]));
      console.log(this.formatDayChina([1, 2, 4, 6, 7]));
      console.log(this.formatDayChina([1, 2, 3, 6, 7]));
      console.log(this.formatDayChina([1, 2, 3, 5, 6, 7]));
      console.log(this.formatDayChina([2, 3, 4, 6, 7]));
      console.log(this.formatDayChina([1, 3, 5, 6, 7]));
      console.log(this.formatDayChina([1, 4, 5, 6, 7]));
      console.log(this.formatDayChina([1, 3, 5, 7]));
    },
  },
};
</script>

<style scoped></style>
