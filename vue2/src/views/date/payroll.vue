<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-07-27 15:49:55
 * @LastEditors: Please set LastEditors
 * @Description: 近7天，三个月
 * @FilePath: \vueDemo\src\views\date\payroll.vue
-->
<template>
  <div>
    <div
      v-for="(item, index) in dateList"
      @click="changeDate(index)"
      :class="[index == changeBackground ? 'text_color' : 'alert_btn']"
      :key="index"
    >
      <div>{{ item.date }}</div>
    </div>
    <div>{{ startDate }}-{{ endDate }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      dateList: [
        { date: "本月", value: "1M" },
        { date: "近七天", value: "7D" },
        { date: "近三个月", value: "3M" },
        { date: "当天", value: "0" },
        { date: "自定义", value: "10" },
      ],
      changeBackground: 2,
      // 开始日期
      startDate: "请输入开始日期",
      // 结束日期
      endDate: "请输入结束日期",
      TimeFlag: "",
    };
  },
  created() {
    var reg2 = new RegExp("/", "gm");
    // 默认查询近三个月的日期
    this.startDate = this.calcDate(this.TimeFlag);
    // 当前电脑时间
    this.endDate = this.getNowFormatDate("/");
    // 获取一年之前的日期,正好那一天不算
    var oldDate = this.calcDate("12M").replace(reg2, "-");
    var date = new Date(oldDate);
    // 获取一年前的后一天的日期
    date = +date + 1000 * 60 * 60 * 24;
    date = new Date(date);
    var seperator1 = "-";
    var year = date.getFullYear(); //年
    var month = date.getMonth() + 1; //月
    var strDate = date.getDate(); //日
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    this.minDate = year + seperator1 + month + seperator1 + strDate;
    // 当前时间
    this.maxDate = this.getNowFormatDate("/").replace(reg2, "-");
  },
  methods: {
    changeDate(index) {
      this.changeBackground = index;
      this.$store.state.dayNumber = this.dateList[index].date;
      this.TimeFlag = this.dateList[index].value;
      // 不是自定义和本月
      if (this.TimeFlag != "10") {
        if (this.TimeFlag != "1M") {
          this.startDate = this.calcDate(this.TimeFlag);
          this.endDate = this.getNowFormatDate("/");
        } else {
          //本月
          this.startDate = this.getFirstDate(); //本月第一天
          this.endDate = this.getNowFormatDate("/");
        }
        this.showPickerDate = false;
      }
      // 是自定义
      if (this.TimeFlag == "10") {
        this.showPickerDate = true;
      }
    },
    getNowFormatDate(seperator1, longtimes) {
      //longtimes是要格式化的毫秒数，不传默认当前日期
      if (longtimes) {
        var date = new Date(longtimes);
      } else {
        var date = new Date();
      }
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = "" + year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    calcDate(dateValue) {
      var nowDate = new Date(); //当前日期
      if (dateValue == "Today" || dateValue == "0") {
        var formDate = this.getNowFormatDate("/");
      } else if (dateValue.includes("D")) {
        //推算天
        let dateNum = dateValue.replace(/[^\d]/g, "");
        let longtimes = nowDate.setDate(nowDate.getDate() - dateNum);
        var formDate = this.getNowFormatDate("/", longtimes);
      } else if (dateValue.includes("M")) {
        //推算月
        let monthNum = dateValue.replace(/[^\d]/g, "");
        let longtimes = nowDate.setMonth(nowDate.getMonth() - monthNum);
        var formDate = this.getNowFormatDate("/", longtimes);
      }
      return formDate;
    },
  },
};
</script>

<style scoped></style>
