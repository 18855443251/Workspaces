<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <navBar title="首页" ref="nav" />
    <div @click="test">测试</div>
    <h1 id="header">我的标题</h1>
  </div>
</template>
<script>
// import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  // components: { navBar },
  data() {
    return {
      arrTest: [
        { sendStatus: "Success", name: "成功1" },
        { sendStatus: "fail", name: "失败" },
        { sendStatus: "Success", name: "成功2" },
      ],
    };
  },
  created() {
    // 14、编码和解码
    // var a = "http://w3cschool.cc/my test.asp?name=stare&car=saab";
    // var b = encodeURIComponent(a); //"http%3A%2F%2Fw3cschool.cc%2Fmy%20test.asp%3Fname%3Dstare%26car%3Dsaab"
    // var c = decodeURIComponent(b); //"http://w3cschool.cc/my test.asp?name=stare&car=saab"
    // console.log(b);
    // this.test();
    // 过滤器使用
  },
  methods: {
    // 重复弹吐司
    toast() {
      this.arrTest.forEach((element, index) => {
        let timeOut = setTimeout(() => {
          if (element.sendStatus == "Success") {
            this.myToast(`${element.name}`, 1000);
          } else {
            this.myToast(`${element.name}`, 1000);
          }
          clearTimeout(timeOut);
        }, index * 1500);
      });
    },
    test() {
      document.getElementById('header').style.color="red"
      // console.log(this.$refs.nav.$el.getElementsByClassName("title-right-text"));
    },
  },
};
</script>
<style scoped>
</style>