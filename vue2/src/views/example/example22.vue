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
    <div class="test">
      <img
        src="https://i-static.jxnxs.com/h5-image/account/account_new_qrcode.png"
        class="qrCode_icon"
        @click="qrCodeShow"
      />
      <div
        class="qrcodeImage"
        id="qrcode"
        ref="qrcode"
        v-if="qrCodeStatus"
      ></div>
    </div>
  </div>
</template>
<script>
import gwm from "@/utils/gwm.js";
// import QRCode from "qrcodejs2";
export default {
  name: "claneCache",
  components: {},
  data() {
    return {
      qrCodeStatus: false,
    };
  },
  created() {
    setTimeout(() => {
      gwm.creation({
        container: "#app-body",
        txt: "江西·农商银行",
        width: 140,
        height: 90,
        x: 10,
        y: 45,
        alpha: "1.0",
        fontSize: 15,
        color: "rgba(210,210,210,.5)",
        mode: "element",
        angle: "-25",
      });
    }, 1000);
  },
  methods: {
    qrCodeShow() {
      let params = {
        qrCodeType: "cardTransferInfo",
        businessNo: item.acNo,
      };
      this.$remote("qrcode/generateQRcode", params).then((res) => {
        this.qrCodeStatus = true;
        this.$nextTick(() => {
          this.qrcodejs(
            "https://mpaastest.jxnxs.com:1443/a3/mobile-bank/qrcode/queryQrCodeInfo?qrCodeNo=Q1202624784559509504&qrCodeType=cardTransferInfo"
          );
        });
      });
    },
    qrcodejs(link) {
      this.clearQRCode();
      new QRCode("qrcode", {
        width: 150,
        height: 150, // 高度
        text: link, // 二维码内容
      });
    },
    clearQRCode() {
      let eleNode = document.getElementById("qrcode");
      eleNode.innerHTML = "";
      eleNode.removeAttribute("title");
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