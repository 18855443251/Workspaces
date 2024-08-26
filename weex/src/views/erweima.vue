<template>
  <div class="container">
    <div class="content">
      <div class="content-top">
        <div class="QR-code-box" @click="saveQRCodeImg">
          <image class="QR-code" :src="QRCodeBase64" ref="poster" />
        </div>
        <text class="content-top-text">欢迎关注我行个人微信银行，畅想免费动账通知服务</text>
      </div>
      <div class="conten-main">
        <div class="cell-box border-bottom">
          <div class="cell-left">
            <text class="cell-left-text">我行官网</text>
          </div>
          <div class="cell-right">
            <text class="cell-right-text-color" @click="jumpWebsite">www.bankofyk.com</text>
          </div>
        </div>
        <div class="cell-box border-bottom">
          <div class="cell-left">
            <text class="cell-left-text">客服热线</text>
          </div>
          <div class="cell-right">
            <text class="cell-right-text-color" @click="callCustomerService">40078-96178</text>
          </div>
        </div>
        <div class="cell-box border-bottom">
          <div class="cell-left">
            <text class="cell-left-text">当前版本</text>
          </div>
          <div class="cell-right" @click="isUpdateApp">
            <div class="cell-new" v-if="versionInfo.isUpdate"></div>
            <text class="cell-right-text">{{ versionText }}</text>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <text class="button-confirm button-text" @click="shareAction">分享</text>
      </div>
    </div>
    <div class="agreement-box">
      <text class="agreement-title" @click="launchStage('main.serviceAgreement')">《营口银行电子银行个人客户服务协议》</text>
      <text class="agreement-title" @click="launchStage('main.privacyPolicy')">《营口银行APP用户隐私协议》</text>
      <text class="agreement-text">营口银行 @2020版权所有</text>
    </div>
  </div>
</template>

<script>
const context = weex.requireModule("context");
const YKUtils = weex.requireModule("YKUtils");
export default {
  data() {
    return {
      title: "关注我们",
      platform: "", //设备 ios android
      versionInfo: { isUpdate: "1" }, // 版本信息
      versionText: "",
    };
  },
  created() {
    this.confirmMsg("句句句句句句句句");
    this.getParamsInfo();
  },
  methods: {
    getParamsInfo() {
      //   this.platform = weex.config.env.platform.toLowerCase();
      //   let versionInfo = context.sessionGetString("versionInfo");
      if (versionInfo) this.versionInfo = JSON.parse(versionInfo);
      this.setVersionStatus();
    },
    // 设置版本状态
    setVersionStatus() {
      if (this.versionInfo.isUpdate) {
        this.versionText = "点击获取更新";
      } else {
        this.versionText = "V" + this.versionInfo.currentVersion;
      }
    },
    saveQRCodeImg() {
      this.confirmMsg("是否将二维码保存到本地?", () => {
        this.saveAlbum();
      });
    },
    saveAlbum() {
      let imgBase64 = this.QRCodeBase64.substring(22);
      YKUtils.getSaveAlbum(imgBase64, (data) => {
        data = JSON.parse(data); // {"type":"0 失败 1 成功"}
        if (data.type == "0") {
          this.alertMsg(data.msg);
        } else if (data.type == "1") {
          this.alertMsg("保存成功");
        }
      });
    },
    shareAction() {
      YKUtils.getScreenShotShare((data) => {
        data = JSON.parse(data); // {"type":"0 失败 1 成功"}
        if (data.type == "0") {
          this.alertMsg(data.msg);
        } else if (data.type == "1") {
          this.alertMsg("分享成功");
        }
      });
    },
    callCustomerService() {
      this.launchStage("ext:tel://40078-96178");
    },
    jumpWebsite() {
      YKUtils.jumpPublicNet("http://www.bankofyk.com");
    },
    isUpdateApp() {
      if (this.versionInfo.isUpdate) {
        let message = this.versionInfo.description;
        this.confirmMsg(message, () => {
          this.confirmUpdate();
        });
      }
    },
    //确认更新app
    confirmUpdate() {
      let updateUrl = this.versionInfo.updateUrl;
      if (this.platform == "android") {
        const updateAPP = weex.requireModule("updateAPP");
        updateAPP.updateAppByUrl(updateUrl);
        // this.launchStage('ext:' + updateUrl)
      } else if (this.platform == "ios") {
        this.launchStage("ext:" + updateUrl);
        context.shutdown();
      }
    },
  },
  computed: {
    QRCodeBase64() {
      return "data:image/png;base64,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";
    },
  },
};
</script>

<style scoped>
.container {
  width: 750px;
  background-color: #f2f2f2;
}
.content-top {
  margin-top: 68px;
}
.conten-main {
  margin-top: 40px;
}
.QR-code-box {
  align-items: center;
}
.QR-code {
  width: 228px;
  height: 228px;
}
.content-top-text {
  margin-top: 36px;
  font-size: 30px;
  color: #333333;
  text-align: center;
}
.cell-box {
  padding-left: 30px;
  padding-right: 30px;
  width: 750px;
  height: 110px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
.cell-left {
  flex-direction: row;
  align-items: center;
}
.cell-left-text {
  font-size: 30px;
  color: #333333;
}
.cell-right {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.cell-right-text {
  font-size: 30px;
  color: #666666;
}
.cell-right-text-color {
  font-size: 30px;
  color: #cfa762;
}
.cell-right-image-box {
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: flex-end;
}
.cell-right-image {
  width: 30px;
  height: 30px;
}
.border-bottom {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #f2f2f2;
}
.content-bottom {
  margin-top: 30px;
}
.button-wrapper {
  margin-top: 60px;
  width: 750px;
  justify-content: center;
  align-items: center;
}
.button-confirm {
  width: 682px;
  height: 84px;
  line-height: 84px;
  background-image: linear-gradient(to right, #d2b482, #bf9b5f);
  border-radius: 6px;
}
.button-text {
  font-size: 30px;
  color: #ffffff;
  text-align: center;
}
.agreement-box {
  position: fixed;
  bottom: 50px;
  width: 750px;
  align-items: center;
}
.agreement-title {
  margin-top: 10px;
  font-size: 24px;
  color: #347af6;
}
.agreement-text {
  margin-top: 10px;
  font-size: 24px;
  color: #000000;
}
.cell-new {
  margin-right: 12px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fe5454;
}
</style>
