<template>
  <!-- 标题 -->
  <div class="titlebar-container">
    <div class="title-area">
      <div class="title-left-box">
        <div class="title-left" @click="mpBarLeftBtnClick" v-if="leftImgUrl">
          <image :src="leftImgUrl" class="title-left-image" />
        </div>
      </div>
      <text class="title-text">{{ title }}</text>
      <div class="title-right-box">
        <div class="title-right" @click="mpBarRightBtnClick">
          <image :src="rightImgUrl" class="title-right-image" v-if="rightImgUrl" />
          <text class="title-right-text" v-if="rightTitle">{{ rightTitle }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    rightTitle: {
      type: String,
      default: "",
    },
    rightImgUrl: {
      type: String,
      default: "",
    },
    isControlBack: {
      type: Boolean,
      default: false,
    },
    isTransparent: {
      type: Boolean,
      default: false,
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
      return this.addJNImgBaseUrl("/back.png");
    },
  },
};
</script>
<style scoped>
.titlebar-container {
  position: fixed;
  top: 0px;
}
.title-area {
  width: 750px;
  height: 160px;
  padding-top: 80px;
  padding-bottom: 10px;
  background-color: rgb(255, 255, 255);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title-left-box {
  flex: 1;
  /* padding-left: 37px; */
}
.title-left {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-right {
  /* width: 150px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.title-left-image {
  width: 48px;
  height: 48px;
}
.title-right-image {
  width: 24px;
  height: 40px;
}
.title-text {
  font-size: 36px;
  font-weight: 700;
  /* color: #ffffff; */
  color: rgb(51, 51, 51);
  text-align: center;
}
.title-right-box {
  flex: 1;
  padding-right: 37px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.title-right {
  height: 80px;
  flex-direction: row;
  /* justify-content: flex-end; */
  align-items: center;
}
.title-right-text {
  font-size: 30px;
  color: rgb(47, 119, 230);
}
</style>
