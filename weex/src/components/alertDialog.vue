<template>
  <div v-if="isShow" class="alert" @click="prevent">
    <div class="container">
      <div class="msg">
        <text class="msg_text">{{message}}</text>
        <text v-if="reLogin" class="reLogin">{{reLogin}}</text>
      </div>
      <div class="row">
        <div class="btn_first" v-if="firstBtnText" @click="clickFirstBtn">
          <text class="btn_text">{{firstBtnText}}</text>
        </div>
        <div class="line" v-if="firstBtnText&&secondBtnText"></div>
        <div class="btn_second" v-if="secondBtnText" @click="clickSecondBtn">
          <text class="btn_text">{{secondBtnText}}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: "",
    },
    reLogin: {
      type: String,
      default: "",
    },
    firstBtnText: {
      type: String,
      default: "",
    },
    secondBtnText: {
      type: String,
      default: "确定",
    },
  },
  data() {
    return {};
  },
  watch: {
    isShow: {
      immediate: true,
      handler() {
        const broadCast1 = new BroadcastChannel("OverlayShow");
        if (this.isShow) {
          broadCast1.postMessage("show");
        } else {
          broadCast1.postMessage("hide");
        }
      },
    },
  },
  methods: {
    prevent(event) {
      event.stopPropagation();
    },
    clickFirstBtn() {
      this.$emit("clickFirstBtn");
    },
    clickSecondBtn() {
      this.$emit("clickSecondBtn");
    },
  },
};
</script>
<style scoped>
.alert {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  align-items: center;
  justify-content: center;
}
.container {
  background-color: #ffffff;
  border-radius: 25px;
  width: 545px;
  justify-content: center;
}
.msg {
  justify-content: center;
  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 50px;
}
.msg_text {
  justify-content: center;
  text-align: center;
  font-size: 34px;
  font-weight: 600;
}
.reLogin {
  justify-content: center;
  text-align: center;
  font-size: 28px;
  margin-top: 24px;
}
.row {
  border-top-width: 1px;
  border-top-color: #dddddd;
  height: 90px;
  flex-direction: row;
}
.btn_first {
  flex: 1;
}
.line {
  height: 90px;
  width: 2px;
  background-color: #dddddd;
}
.btn_second {
  flex: 1;
}
.btn_text {
  line-height: 90px;
  text-align: center;
  color: #a67342;
}
</style>


