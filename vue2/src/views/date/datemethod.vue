<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-07-27 15:33:21
 * @LastEditors: Please set LastEditors
 * @Description: 日期转换方法
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>日期方法</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      var now = new Date();
      console.log(now + "now"); //Fri May 29 2020 16:58:18 GMT+0800 (中国标准时间)now
      var time = now.getTime();
      console.log(time + "time"); //1590742698132time
      var fDate = new Date(time);
      console.log(fDate + "fDate"); //Fri May 29 2020 16:58:18 GMT+0800 (中国标准时间)fDate
      var localDate = now.toLocaleDateString();
      console.log(localDate + "localDate"); //2020/5/29localDate
      var date = new Date(localDate);
      console.log(date + "date"); //Fri May 29 2020 00:00:00 GMT+0800 (中国标准时间)date
      var today = new Date("July 21,2008,01:13:00:526");
      console.log(today + "today"); //Mon Jul 21 2008 01:13:00 GMT+0800 (中国标准时间)today
      var year = today.getFullYear();
      console.log(year + "year"); //2008year
      var ms1 = Date.parse("March 21,2012");
      console.log(ms1 + "ms1"); //1332259200000ms1 返回1970/01/01至2012/3/21之间的毫秒数
      var ms2 = Date.parse("March 12,2012");
      console.log(ms2 + "ms2"); //1331481600000ms2  返回1970/01/01至2012/3/21之间的毫秒数
      //两个日期间隔多少天
      var day = Math.floor((ms1 - ms2) / (21 * 60 * 60 * 1000));
      console.log(day + "day"); //10day
      // 设置一个月的某一天为上个月的最后一天
      now.setDate(0);
      // now.setMonth(0);//设置月份参数为0，一月为0,Wed Jan 29 2020 17:22:33 GMT+0800 (中国标准时间)
      console.log(now + "now"); //Thu Apr 30 2020 17:17:26 GMT+0800 (中国标准时间)now
      var now1 = new Date();
      now1.setMonth(now1.getMonth(), 0); //设置日期为上一个月的最后一天
      console.log(now1 + "now1"); //Thu Apr 30 2020 17:24:50 GMT+0800 (中国标准时间)now1
      now1.setMonth(15);
      console.log(now1 + "now1"); //Fri Apr 30 2021 17:30:10 GMT+0800 (中国标准时间)now1
      var ms3 = now1.setMonth(15);
      console.log(ms3 + "ms3"); //1619774934830ms3
    },
  },
};
</script>

<style scoped></style>
