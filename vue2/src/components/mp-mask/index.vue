<template>
  <!-- 可以在遮罩层中添加 @touchmove.prevent 就可以实现禁止页面滚动阻止浏览器默认行为 -->
  <!-- vue提供的 @touchmove.prevent 可以用来阻止滑动，但是这个方法会对其内的子div的滑动事件也禁止掉了，这样会导致中间弹框的文字无法滑动。如果没有中间滑动需求，用 @touchmove.prevent 实现是一个很好的方法。 -->
  <div
    class="container"
    v-show="show"
    @touchmove.prevent.stop
    @mousewheel.prevent
  >
    <div class="image_box">
      <img class="loading_image" src="@/assets/img/mask/loading.gif" />
    </div>
  </div>
</template>

<script>
/**
 * @module loading组件
 * @description loading组件
 * @example <mp-mask :show="show"></mp-mask>
 */
export default {
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
    return {};
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
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
