<template>
  <div class="login-view">
    <div @click="callBtn">拨打电话</div>
    <div @click="delete1">删除</div>
    <div @click="lunbo1">左右轮播</div>
    <div @click="lunbo2">上下轮播</div>
    <div @click="verifiyCodeSMS">验证码</div>
    <div @click="wyhHome">瞄点配置</div>
    <div @click="erweima">二维码</div>
    <text>{{ searchIcon }}</text>
  </div>
</template>
<script>
var globalDefine = require("./globalDefine");

export default {
  name: "Login",
  data() {
    return {
      searchIcon: globalDefine.apiUrl.resUrl,
      timeStamp: "",
    };
  },
  methods: {
    callBtn() {
      this.jump("/call");
    },
    delete1() {
      this.jump("/delete1");
    },
    lunbo1() {
      this.jump("/lunbo1");
    },
    lunbo2() {
      this.jump("/lunbo2");
    },
    verifiyCodeSMS() {
      this.jump("/verifiyCodeSMS");
    },
    wyhHome() {
      this.jump("/wyhHome");
    },
    erweima() {
      this.jump("/erweima");
    },
  },
};
</script>
<style scoped>
</style>
