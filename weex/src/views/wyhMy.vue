<!--
 * @Author: your name
 * @Date: 2022-01-18 14:44:28
 * @LastEditTime: 2022-01-20 14:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weex\src\views\wyhMy.vue
-->
<template>
  <div>
    <text>拒绝</text>
  </div>
</template>

<style scoped>
</style>

<script>
const context = weex.requireModule("context");
var globalDefine = require('./globalDefine');
export default {
  components: {},
  data() {
    return {
      myObject: {
        empname: "",
        empstatus: "",
        a001735: "",
        mobileno: "",
        firstdeptname: "",
      },
    };
  },
  created() {
    // 成功
    this.wyData().then((res) => {
      this.myObject = res;
    });
    // 失败
    this.wyData().catch((err) => {
      console.log(JSON.stringify(err));
    });
  },
  methods: {
    wyData() {
      return new Promise((resolve, reject) => {
        this.postDo(
          "myIndex.do",
          { userId: "35123" },
          (response) => {
            // resolve(response);//成功
            reject(response); //失败
          },
          (err) => {
            // {"msg":"系统未找到该交易","status":"system.undefined_transaction"}
            console.log(JSON.stringify(err));
            this.Confirm(err.msg, "查看", err);
          },
          { hideLayer: true }
        );
      });
    },
    yxdTest() {
      this.postDo(
        "queryToDoTaskCount.do",
        { taskPost: "", taskUserNo: "" }, //用户id},
        (res) => {
          console.log(res);
        },
        {
          hideLayer: true,
          proxyPath: "/process111/cloudloan/",
        }
      );
    },
    test() {
      return new Promise((resolve, reject) => {
        this.postDo(
          "myIndex.do",
          { userId: "35123" },
          (response) => {
            // resolve(response); //成功
            reject(response); //失败
          },
          (err) => {
            // {"msg":"系统未找到该交易","status":"system.undefined_transaction"}
            console.log(JSON.stringify(err));
            this.Confirm(err.msg, "查看", err);
          },
          { hideLayer: true }
        );
      })
        .then((res) => {
          this.myObject = res;
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });
    },
  },
};
</script>