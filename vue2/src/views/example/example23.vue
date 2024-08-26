<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view" v-if="isShow">
    <div class="app-body" id="app-body">内容，保存电子回单</div>
    <img :src="qrCodeUrl" style="width: 60%" v-if="qrCodeUrl" />
    <div @click="handleSaveClick">测试</div>
  </div>
</template>
<script>
import gwm from "@/utils/gwm.js";
// import html2canvas from "html2canvas";
export default {
  name: "claneCache",
  components: {},
  data() {
    return {
      isShow: false,
      qrCodeUrl: "",
    };
  },
  created() {
    this.$nextTick(() => {
      this.isShow = true;
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
    });
  },
  methods: {
    handleSaveClick(type) {
      // 截屏
      html2canvas(document.getElementById("app-body"), {
        allowTaint: false,
        useCORS: true,
      }).then((canvas) => {
        this.qrCodeUrl = canvas.toDataURL("image/jpeg", 0.5);
        var pageData = canvas
          .toDataURL("image/jpeg", 0.5)
          .replace("image/jpeg", "image/octet-stream");
        //  let pageData = canvas.toDataURL('image/png', 0.5).replace('image/png', 'image/octet-stream')
        // 分享到微信
        if (type == "weChat") {
          return this.shareWechat(canvas.toDataURL("image/jpeg", 0.5));
        }
        // 保存图片到手机
        // AlipayJSBridge_Screenshots(pageData);
      });
    },
    shareWechat(pageData) {
      AlipayJSBridge_bridgesForH5(
        "shareFunction",
        {
          toChannel: "kAPSKChannelWeixin",
          type: "imageBase64",
          imageBase64: pageData,
        },
        (res) => {
          console.log("分享成功");
        }
      );
    },
  },
};
</script>
<style scoped>
.app-body {
  height: 600px;
}
</style>