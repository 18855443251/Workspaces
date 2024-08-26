<template>
  <div class="btn">
    <div class="btn_box" :class="[changeBg?'shenBg':'qianBg']" @click="submitBtn">
      <text class="btn-text">{{btnText}}</text>
    </div>
  </div>
</template>
<script>
export default {
  name: "oneBtn",
  props: {
    btnText: {
      type: String,
      default: "",
    },
    changeBg: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    submitBtn() {
      this.$emit("submitBtn");
    },
  },
};
</script>
<style scoped>
.btn {
  width: 750px;
  flex-direction: row;
  justify-content: center;
}
.btn_box {
  width: 640px;
  height: 88px;
  border-radius: 44px;
}
.qianBg {
  background-color: #c7c7c7;
}
.shenBg {
  background-color: #a67342;
}
.btn-text {
  font-size: 36px;
  color: rgba(255, 255, 255, 1);
  line-height: 88px;
  text-align: center;
}
</style>
