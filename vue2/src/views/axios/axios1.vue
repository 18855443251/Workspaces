<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-12 10:58:29
 * @LastEditors: Please set LastEditors
 * @Description: 发接口方式
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div @click="test">测试</div>
    <div>{{ nowDate }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      nowDate: "",
      _tokenName: "",
    };
  },
  created() {
    // this.test1();
    // this.test2();
    this.networkCheck();
  },
  methods: {
    test() {
      var params = {
        orgCode: "01101",
        userID: "55087",
      };
      var value = {
        limit: "10",
        page_num: "1",
      };
      var allParams = Object.assign(params, value);
      this.$axios.post("queryAPPEmployeeScore.do", allParams).then((res) => {
        this.acTotal = res.acTotal;
        var a = {
          title: "温馨提示",
          content: "交易成功",
          confirmText: "去登录",
        };
        // this.Alert(a);
        this.Alert(a, () => {
          console.log("需要执行的操作");
        });
      });
    },
    test1() {
      this.getTimestamp((Timestamp1) => {
        // Timestamp1=1600247555698
        this.nowDate = Number(Timestamp1);
      });
    },
    test2() {
      var data = {};
      this.genToken((_tokenName1) => {
        data._tokenName = _tokenName1;
        this.AfterTransferCancel(data);
      });
    },
    AfterTransferCancel(params) {
      this.$axios.post("AfterTransferCancel.do", params).then((data) => {
        this.Alert("撤销成功");
      });
    },
    // 网络检测
    networkCheck() {
      axios
        .get("/default-default/central.dat")
        .then((res) => {
          console.log("成功")
        })
        .catch((error) => {
          console.log("失败")
        });
    },
  },
};
</script>

<style scoped></style>
