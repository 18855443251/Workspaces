<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-09-29 15:32:41
 * @LastEditors: Please set LastEditors
 * @Description: 引导页
 * @FilePath: \vueDemo\src\views\dioAlert.vue
-->
<template>
  <div class="box">
    <div v-if="yindao1" class="yindao1" :style="{width:windowWidth+'px',height:windowHeight+'px'}">
      <span class="nextStep" @click="goNext('1')">下一步</span>
    </div>
    <div v-if="yindao2" class="yindao2" :style="{width:windowWidth+'px',height:windowHeight+'px'}">
      <span v-if="yindao2&&!yindao1" class="nextStep" @click="goNext('2')">下一步</span>
    </div>
    <div v-if="yindao3" class="yindao3" :style="{width:windowWidth+'px',height:windowHeight+'px'}">
      <span v-if="yindao3&&!yindao1&&!yindao2" class="nextStep" @click="nextBtn">我知道了</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      windowHeight: 0, //高度
      windowWidth: 0, //宽度
      yindao1: true, //引导页1显示flag
      yindao2: true, //引导页2显示flag
      yindao3: true, //引导页3显示flag
    };
  },
  mounted() {
    // 获取屏幕宽高
    this.windowWidth = document.documentElement.clientWidth;
    // alert(this.windowWidth);
    this.windowHeight = document.documentElement.clientHeight;
    // (document.documentElement.clientHeight /
    //   document.documentElement.clientWidth) *
    // 375;
    // alert(this.windowHeight).
    // 阻止滑动
    document.querySelector(".box").addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
  },
  methods: {
    // 下一步点击事件
    goNext(val) {
      if (val == "1") {
        this.yindao1 = false;
        this.yindao2 = true;
        this.yindao3 = true;
      }
      if (val == "2") {
        this.yindao1 = false;
        this.yindao2 = false;
        this.yindao3 = true;
      }
    },
    // 我知道了点击事件
    nextBtn() {
      this.yindao1 = false;
      this.yindao2 = false;
      this.yindao3 = false;
      context.replaceStage("main.qAHome?indexName=" + "最新");
    },
  },
};
</script>
<style scoped>
.box {
  margin-top: -160px;
  overflow: hidden;
}
.yindao1 {
  /* width: 100%; */
  /* width: 750px; */
  overflow: hidden;
  margin-left: -32px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("../assets/img/yindao1.png");
  z-index: 99999;
}
.yindao2 {
  /* width: 100%; */
  /* width: 750px; */
  overflow: hidden;
  margin-left: -32px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("../assets/img/yindao2.png");
  z-index: 9999;
}
.yindao3 {
  /* width: 100%; */
  /* width: 750px; */
  overflow: hidden;
  margin-left: -32px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("../assets/img/yindao3.png");
  z-index: 999;
}
.nextStep {
  width: 400px;
  height: 88px;
  border-radius: 44px;
  border: solid 1px #ffffff;
  font-size: 32px;
  color: #ffffff;
  position: fixed;
  left: 176px;
  bottom: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>