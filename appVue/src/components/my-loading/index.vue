<!-- loading组件 -->
<template>
  <!-- @touchmove.prevent.stop -->
  <van-overlay :show="show" @mousewheel.prevent>
    <div class="wrapper">
      <img
        class="loading_image"
        :src="require(`@/assets/images/${loadingIcon}`)"
        v-if="loadingIcon"
      />
      <van-loading type="spinner" color="#1989fa" size="50px" v-else />
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: "myLoading",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    loadingIcon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.van-overlay {
  z-index: 100;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.loading_image {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  opacity: 0.7;
}
</style>
