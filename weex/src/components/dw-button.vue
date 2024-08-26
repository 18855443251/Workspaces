<!--
 * @Author: 洪丽云
 * @Date: 2021-08-30 16:53:25
 * @LastEditTime: 2021-09-26 14:21:28
 * @LastEditors: Please set LastEditors
 * @Description: 按钮组件
 * @FilePath: \dtapp-weex\src\components\dw-button.vue
-->
<template>
  <text class="btn" :style="textStyle" @click="onClicked">{{text}}</text>
</template>
<script>
export default {
  name: "dw-button",
  props: {
    // 文字
    text: {
      type: String,
      default: "提交",
    },
    // 主题
    dwTheme: {
      type: String,
      default: "brown",
    },
    // 文字颜色
    textColor: {
      type: String,
      default: "",
    },
    // 按钮大小
    size: {
      type: String,
      default: "large",
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: "",
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "",
    },
    // 禁用按钮属性
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 金色按钮主题
      brownStyle: {
        backgroundColor: "#a67342",
        color: "#ffffff",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#a67342",
        borderRadius: "44px",
      },
      // 白色按钮主题
      whiteStyle: {
        backgroundColor: "#ffffff",
        color: "#a67342",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#a67342",
        borderRadius: "44px",
      },
      // 灰色按钮主题
      disabledStyle: {
        backgroundColor: "#c7c7c7",
        color: "#ffffff",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#c7c7c7",
        borderRadius: "44px",
      },
      // 大按钮
      largeSize: {
        width: "686px",
        height: "88px",
      },
      // 中等按钮
      middleSize: {
        width: "328px",
        height: "88px",
      },
      // 小按钮
      smallSize: {
        width: "200px",
        height: "88px",
      },
    };
  },
  computed: {
    textStyle() {
      // 禁用属性存在使用灰色主题
      if (this.disabled) {
        this.dwTheme = "disabled";
      }
      return {
        ...this[this.dwTheme + "Style"], //主题
        ...this[this.size + "Size"], //按钮大小
        color: this.textColor || this[this.dwTheme + "Style"].color, //文字颜色
        lineHeight: this[this.size + "Size"].height,
        backgroundColor:
          this.backgroundColor || this[this.dwTheme + "Style"].backgroundColor, //背景颜色
        borderColor:
          this.borderColor || this[this.dwTheme + "Style"].borderColor, //按钮边框颜色
      };
    },
  },
  methods: {
    onClicked() {
      this.$emit("dwButtonClicked");
    },
  },
};
</script>
<style scoped>
.btn {
  text-align: center;
}
</style>
