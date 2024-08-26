<template>
  <div class="container" v-if="show">
    <wxc-overlay :hasAnimation="false" opacity="0.2" @wxcOverlayBodyClicked="$emit('navigateto')"></wxc-overlay>
    <div class="image_box_bottom">
      <div
        v-for="(ref,index) in Object.values(refsList)"
        :key="index"
        @click="$emit('navigateto',ref)"
      >
        <text
          :class="['nav_text',index==Object.values(refsList).length-1?'':'border_bottom',index==0?'mt':'']"
        >{{ref.name}}</text>
        <!-- ref.isNew更新贼为true -->
        <image v-if="ref.isNew" src="./imgs/bank/nav_new.png" class="image_new" />
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @module loading组件
 * @description loading组件
 * @example  <mp-slider></mp-slider>
 * 例子如下:
 * <mp-mask :show="show"></mp-mask>
 *
 */
import { WxcOverlay } from "weex-ui";
export default {
  components: { WxcOverlay },
  /**
   * Props 组件接收属性
   * @prop {Boolean} show 显示遮罩
   */
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    refsList: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    refsList: {
      immediate: true,
      deep: true,
      handler() {},
    },
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-start;
  align-items: flex-start;
}
.image_new {
  width: 36px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 32px;
}
.mt {
  /* margin-top: 12px; */
}
.image_box {
  position: fixed;
  top: 176px;
  left: 38px;
  width: 28px;
  height: 16px;
  /*  */
  /* background-color: #ffffff; */
}
.image_box_bottom {
  position: fixed;
  top: 192px;
  left: 32px;
  width: 256px;
  height: 846px;
  background-color: #fff;
  /* border-radius: 8px 8px 8px 8px; */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.nav_text {
  font-size: 32px;
  color: #333333;
  margin-left: 28px;
  line-height: 92px;
  /* margin-right: 32px; */
  text-align: center;
  width: 200px;
}
.border_bottom {
  border-bottom-color: #dedede;
  border-bottom-width: 2px;
}
</style>
