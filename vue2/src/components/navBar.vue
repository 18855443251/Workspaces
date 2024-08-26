<template>
  <div class="title-area" :style="{backgroundColor:bgColor}">
    <div class="title-left-box">
      <div class="title-left" @click="mpBarLeftBtnClick" v-if="leftImgUrl">
        <img :src="leftImgUrl" class="title-left-image" />
      </div>
    </div>
    <div class="title-text">{{ title }}</div>
    <div class="title-right-box">
      <div class="title-right" @click="mpBarRightBtnClick">
        <img :src="rightImgUrl" class="title-right-image" v-if="rightImgUrl" />
        <div v-if="rightTitle" :class="show?'title-right-text':'red'">{{ rightTitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "titlebar",
  props: {
    title: {
      type: String,
      default: "",
    },
    rightTitle: {
      type: String,
      default: "哈哈",
    },
    show: {
      type: Boolean,
      default: true,
    },
    rightImgUrl: {
      type: String,
      default: "",
    },
    isControlBack: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
  },
  methods: {
    mpBarLeftBtnClick() {
      if (!this.isControlBack) {
        this.goBack();
      }
      this.$emit("mpBarLeftBtnClick");
    },
    mpBarRightBtnClick() {
      this.$emit("mpBarRightBtnClick");
    },
  },
  computed: {
    leftImgUrl() {
      // return require("@/assets/img/back.png");
    },
  },
};
</script>
<style scoped>
.title-area {
  position: fixed;
  top: 0px;
  z-index: 1000;
  display: flex;
  width: 750px;
  height: 160px;
  padding-top: 80px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title-left-box {
  flex: 1;
}
.title-left {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
}
.title-left-image {
  width: 48px;
  height: 48px;
}
.title-right-image {
  width: 48px;
  height: 48px;
  margin-right: 8px;
}
.title-text {
  font-size: 36px;
  font-weight: 700;
  /* color: #ffffff; */
  color: rgb(51, 51, 51);
  text-align: center;
}
.title-right-box {
  display: flex;
  flex: 1;
  /* padding-right: 30px; */
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.title-right {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title-right-text {
  font-size: 30px;
  color: #cbae92;
}
.red {
  font-size: 30px;
  color: rgb(255, 0, 33);
}
</style>
