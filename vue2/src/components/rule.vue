<!--
 * @Author: your name
 * @Date: 2021-04-20 19:17:51
 * @LastEditTime: 2021-08-06 10:02:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bank\src\components\openRed\rule.vue
-->
<template>
  <!-- 或者 <div v-if="isShowRule" class="alert" @touchmove="touchmove">  -->
  <!-- <div v-if="isShowRule" class="alert" @touchmove.prevent> -->
  <div v-if="isShowRule" class="alert">
    <div class="container">
      <div class="header">等级规则</div>
      <div class="middle">
        <div>序时完成率</div>
        <div>在60%以下，倔强青铜组；</div>
      </div>
      <div class="btn" @click="comfirmBtn">
        <div class="btn_text">知道了</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowRule: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    // touchmove作用在哪个元素，就滑动哪个元素阻止浏览器滑动
    touchmove(e) {
      // 阻止浏览器默认事件
      e.preventDefault();
    },
    comfirmBtn() {
      this.isShowRule = false;
      document.body.style.overflow = "auto";
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 300px;
  height: 330px;
  background-color: #ffffff;
  border-radius: 25px;
}
.header {
  color: #333333;
  font-size: 32px;
  margin-top: 64px;
  margin-bottom: 32px;
  text-align: center;
  font-weight: 700;
}
.middle {
  margin-left: 64px;
  font-size: 28px;
  color: #333333;
  margin-bottom: 64px;
}
.btn {
  border-top-width: 1px;
  border-top-color: #dedede;
  border-top-style: solid;
  height: 10px;
  text-align: center;
  line-height: 10px;
}
.btn_text {
  color: #a67342;
  font-size: 32px;
}
</style>


