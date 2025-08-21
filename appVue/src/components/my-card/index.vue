<!-- 卡片组件 -->
<template>
  <div class="my_card">
    <!-- 卡片头部 -->
    <div class="header" @click="handleClick">
      <slot name="header">
        <!-- 头部左侧 -->
        <slot name="headerLeft">
          <div class="header_left">
            <slot name="headerLeftLeft"></slot>
            <!-- 头部左侧：图片 -->
            <img
              :src="headerLeftImage"
              alt="Header Image"
              v-if="headerLeftImage"
              class="header_left_image"
              @click.stop="handleLeftImg"
            />
            <!-- 头部左侧：图标 -->
            <span
              :class="['FullDesignIcons header_left_icon', headerLeftIcon]"
              v-if="headerLeftIcon"
              @click.stop="handleLeftIcon"
            ></span>
            <!-- 头部左侧：文本 -->
            <span
              class="header_left_text"
              v-if="headerLeftText"
              @click.stop="handleLeftText"
            >
              {{ headerLeftText }}
            </span>
            <!-- 头部左侧文本的右侧：描述（单位：万元） -->
            <span class="header_left_desc" v-if="headerLeftDesc">
              {{ headerLeftDesc }}
            </span>
            <!-- 头部左侧文本的右侧：图标提示 -->
            <span
              :class="['FullDesignIcons header_left_sub_icon', headerSubIcon]"
              v-if="headerSubIcon"
              @click.stop="handleSubIcon"
            ></span>
            <slot name="headerLeftRight"></slot>
          </div>
        </slot>
        <slot name="headerRight">
          <!-- 头部右侧、-->
          <div class="header_right">
            <slot name="headerRightLeft"></slot>
            <!-- 头部右侧：文本 -->
            <span
              class="header_right_text"
              v-if="headerRightText"
              @click="handleRightText"
              >{{ headerRightText }}</span
            >
            <!-- 头部右侧：图片 -->
            <img
              :src="headerRightImage"
              alt="Header Image"
              v-if="headerRightImage"
              class="header_right_image"
              @click.stop="handleRightImg"
            />
            <!-- 头部右侧：图标 -->
            <span
              :class="['FullDesignIcons header_right_icon', headerRightIcon]"
              v-if="headerRightIcon"
              @click.stop="handleRightIcon"
            ></span>
            <!-- 折叠上下箭头 -->
            <span
              :class="[
                'FullDesignIcons header_right_icon',
                isFolded ? 'ico_arrow_b' : 'ico_arrow_t',
              ]"
              v-if="accordion"
              @click.stop="handleOpenClick"
            ></span>
            <slot name="headerRightRight"></slot>
          </div>
        </slot>
      </slot>
    </div>
    <div v-show="!isFolded">
      <!-- 卡片中部：插槽 -->
      <div class="middle" v-if="$slots.middle">
        <slot name="middle"></slot>
      </div>
      <!-- 卡片尾部：插槽 -->
      <div class="footer" v-if="$slots.footer" @click="handleFooter">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myCard",
  props: {
    // 头部左侧图片
    headerLeftImage: {
      type: String,
      default: "",
    },
    // 头部左侧图标
    headerLeftIcon: {
      type: String,
      default: "",
    },
    // 头部左侧文本
    headerLeftText: {
      type: String,
      default: "",
    },
    // 头部左侧文本描述
    headerLeftDesc: {
      type: String,
      default: "",
    },
    // ico_tip
    // 头部提示图标
    headerSubIcon: {
      type: String,
      default: "",
    },
    // 头部右侧文本
    headerRightText: {
      type: String,
      default: "",
    },
    // 头部右侧图片
    headerRightImage: {
      type: String,
      default: "",
    },
    // 头部右侧图标
    headerRightIcon: {
      type: String,
      default: "",
    },
    // 尾部按钮文本
    footerButtonText: {
      type: String,
      default: "",
    },
    // 手风琴折叠面板
    accordion: {
      type: Boolean,
      default: false,
    },
    // 控制折叠
    // isFolded: {
    //   type: Boolean,
    //   default: false,
    // },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFolded: false,
    };
  },
  watch: {
    value: {
      handler(newValue, oldValue) {
        this.isFolded = newValue;
      },
      immediate: true,
    },
  },
  methods: {
    // 点击整行
    handleClick() {
      if (this.accordion) {
        this.isFolded = !this.isFolded;
      } else {
        this.$emit("handleClick");
      }
    },
    // 点击折叠和展开
    handleOpenClick() {
      this.isFolded = !this.isFolded;
      this.$emit("handleOpenClick", this.isFolded);
    },
    // 左侧图片
    handleLeftImg() {
      this.$emit("handleLeftImg");
    },
    // 左侧图标
    handleLeftIcon() {
      this.$emit("handleLeftIcon");
    },
    // 左侧文本
    handleLeftText() {
      this.$emit("handleLeftText");
    },
    // 左侧图标
    handleSubIcon() {
      this.$emit("handleSubIcon");
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
    handleFooter() {
      this.$emit("footer-button-click"); // 触发尾部按钮点击事件
    },
  },
};
</script>

<style lang="less" scoped>
.my_card {
  background: rgb(255, 255, 255, 1);
  border-radius: 8px;
  padding: 3px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 42px;
    padding: 0 16px;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(0, 138, 255, 0.1) 0%,
      rgba(0, 138, 255, 0) 100%
    );
    .header_left,
    .header_right {
      display: flex;
      align-items: center;
    }
    .header_left {
      span {
        display: inline-block;
        padding: 12px 3px;
      }
      .header_left_text {
        font-size: 14px;
        font-weight: 700;
        color: rgba(10, 21, 52, 1);
        max-width: 140px;
      }
      .header_left_desc {
        font-size: 12px;
        color: rgba(120, 130, 150, 0.8);
      }

      .header_left_image {
        padding: 12px 3px 12px 0;
      }
    }

    .header_right {
      display: flex;
      span {
        display: inline-block;
        padding: 12px 3px;
      }
      .header_right_text {
        font-size: 12px;
        font-weight: 400;
        color: rgba(120, 130, 150, 0.8);
      }
      .header_right_icon {
        margin-left: 10px;
      }
      .header_right_image {
        padding: 12px 3px 12px 0;
      }
    }
  }
}
</style>
