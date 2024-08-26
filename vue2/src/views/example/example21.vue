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
    <div id="qrcode" ref="qrCodeDiv"></div>
    <button @click="bindQRCode">点击生成二维码</button>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  name: "claneCache",
  components: {},
  data() {
    return {};
  },
  methods: {
    bindQRCode() {
      document.getElementById("qrcode").innerHTML = ""; //为了防止生成多张，生成前先清空原先的；
      new QRCode(this.$refs.qrCodeDiv, {
        text: "我是一个二维码", //二维码的内容
        width: 150, //二维码的宽度
        height: 150, //二维码的高度
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
      });
    },
  },
};
</script>
<style scoped>
.test {
  background: red;
}
.qrCode_icon {
  width: 50px;
  height: 50px;
}
</style>