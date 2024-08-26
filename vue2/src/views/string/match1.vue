<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 16:53:09
 * @LastEditors: Please set LastEditors
 * @Description:match匹配
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <div v-show="tranStatus.match('1|2')">继续转账</div>
    <div>{{transReslut.ProcessState}}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      transReslut: {
        ProcessState: "业务已受理",
      },
      tranStatus: "",
    };
  },
  created() {
    this.getParamsInfo();
  },
  methods: {
    getParamsInfo() {
      switch (this.transReslut.ProcessState) {
        case "交易成功":
          this.tranStatus = "1";
          this.transReslut.ProcessState = "转账成功";
          break;
        case "业务已受理":
          this.tranStatus = "2";
          this.transReslut.ProcessState = "交易已受理";
          break;
        case "交易状态不明":
          this.tranStatus = "3";
          this.transReslut.ProcessState = "状态未明";
          break;
        default:
          this.tranStatus = "2";
          this.transReslut.ProcessState = "交易已受理";
      }
    },
  },
};
</script>

<style scoped></style>
