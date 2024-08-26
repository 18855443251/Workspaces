<template>
  <div class="container" v-if="show">
    <wxc-overlay :hasAnimation="false" opacity="0.2"></wxc-overlay>
    <div class="image_box">
      <image class="loading_image" :src="addJNImgBaseUrl('loading.gif')"> </image>
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
import { WxcOverlay } from 'weex-ui'
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
  },
  data() {
    return {}
  },
  created(){
    console.log("1")
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
.image_box {
  width: 200px;
  height: 200px;
}
.loading_image {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  opacity: 0.7;
}
</style>
