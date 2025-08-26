<!-- 标题组件 -->
<template>
  <div class="my_title">
    <!-- 头部 -->
    <div class="header">
      <!-- 头部左侧 -->
      <div class="header_left" @click="handleGoBack">
        <slot name="headerLeft">
          <!-- 左侧图片 -->
          <img
            :src="leftImage"
            alt="Image"
            class="left_image"
            v-if="leftImage"
            @click.stop="handleLeftImg"
          />
          <!-- 左侧图标 -->
          <van-icon
            class="left_icon"
            v-if="leftIcon"
            :name="leftIcon"
            @click.stop="handleLeftIcon"
          />
          <!-- 左侧文本 -->
          <span
            class="left_text"
            v-if="leftText"
            @click.stop="handleLeftText"
            >{{ leftText }}</span
          >
        </slot>
      </div>
      <!-- 中间标题 -->
      <div class="header_middle">
        <div class="header_title" @click.stop="handleTitle">{{ title }}</div>
        <div class="header_sub_title">{{ subtitle }}</div>
      </div>
      <!-- 头部右侧 -->
      <div class="header_right" @click="handleRight">
        <slot name="herderRight">
          <!-- 右侧文本 -->
          <span
            class="right_text"
            v-if="rightText"
            @click.stop="handleRightText"
            >{{ rightText }}</span
          >
          <!-- 右侧图片 -->
          <img
            :src="rightImage"
            alt="Image"
            class="right_image"
            v-if="rightImage"
            @click.stop="handleRightImg"
          />
          <!-- 右侧图标 -->
          <van-icon
            class="right_icon"
            v-if="rightIcon"
            :name="rightIcon"
            @click.stop="handleRightIcon"
          />
        </slot>
      </div>
    </div>
    <!--中间 -->
    <div class="middle" v-if="$slots.middle">
      <slot name="middle"></slot>
    </div>
    <!-- 底部 -->
    <slot name="footer"> </slot>
  </div>
</template>

<script>
export default {
  name: "myTitle",
  props: {
    // 头部左侧文本
    leftText: {
      type: String,
      default: "",
    },
    // 头部左侧图标
    leftIcon: {
      type: String,
      default: "arrow-left",
    },
    // 头部左侧图片
    leftImage: {
      type: String,
      default: "",
    },
    // 头部中间标题
    title: {
      type: String,
      default: "",
    },
    // 头部副标题
    subtitle: {
      type: String,
      default: "",
    },
    // 头部右侧文本
    rightText: {
      type: String,
      default: "",
    },
    // 头部右侧图标
    rightIcon: {
      type: String,
      default: "",
    },
    // 头部右侧图片
    rightImage: {
      type: String,
      default: "",
    },
    // 头部自定义返回
    isControlBack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clickCount: 0, // 点击计数器
      clickTimer: null, // 计时器用于判断点击间隔
    };
  },
  methods: {
    // 返回
    handleGoBack() {
      if (!this.isControlBack) {
        this.$router.back();
      } else {
        this.$emit("handleGoBack");
      }
    },
    // 左侧图片
    handleLeftImg() {
      this.$emit("handleLeftImg");
    },
    // 左侧图标
    handleLeftIcon() {
      if (!this.isControlBack) {
        this.$router.back();
      } else {
        this.$emit("handleLeftIcon");
      }
    },
    // 左侧文本
    handleLeftText() {
      this.$emit("handleLeftText");
    },
    // 右侧文本
    handleRightText() {
      this.$emit("handleRightText");
    },
    // 右侧图片
    handleRightImg() {
      this.$emit("handleRightImg");
    },
    // 右侧图标
    handleRightIcon() {
      this.$emit("handleRightIcon");
    },
    //右侧
    handleRight() {
      this.$emit("handleRight");
    },
    // 点击标题
    handleTitle() {
      this.clickCount += 1;
      // 如果点击了5次，触发 showVConsole
      if (this.clickCount === 5) {
        this.showVConsole();
        this.clickCount = 0; // 触发后重置计数器
        clearTimeout(this.clickTimer); // 清除计时器
      }
      this.$emit("handleTitle");
    },
    // 打开vConsole
    showVConsole() {
      if (window.vConsole === undefined) {
        const script = document.createElement("script");
        script.src = "./vConsole.js";
        script.onload = () => {
          window.vConsole = new window.VConsole();
        };
        document.head.appendChild(script);
      } else {
        window.vConsole.show();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.my_title {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  color: #ffffff;
  background: linear-gradient(180deg, #65b8ff 0%, #008aff 100%);
  z-index: 110;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    color: #ffffff;
    .header_left,
    .header_right {
      display: flex;
      align-items: center;
      padding: 12px 0;
    }

    .left_icon,
    .right_icon {
      font-size: 18px;
    }
    .header_middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      .header_title {
        font-size: 16px;
        line-height: 24px;
      }
      .header_sub_title {
        font-size: 10px;
        line-height: 16px;
      }
    }

    .left_text,
    .right_text {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    .left_icon,
    .right_text {
      margin-right: 8px;
    }
  }
  .middle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
  }
}
</style>
