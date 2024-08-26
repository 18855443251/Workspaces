<template>
  <div>
    <h6>长按</h6>
    <img
      src="@/assets/img/yindao2.png"
      @touchstart.stop="touchStart('')"
      @click="touchend"
    />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      loop: 0, //定时
    };
  },
  created() {},
  methods: {
    // 长按名片打开蒙层
    touchStart(ev) {
      ev = ev || event;
      clearTimeout(this.loop);
      this.loop = setTimeout(() => {
        console.log(ev, "长按了");
      }, 1000);
    },
    // 长按结束
    touchend() {
      clearTimeout(this.loop);
      if (this.loop) {
        this.loop = 0;
        return;
      }
    },
  },
};
</script>

<style scoped>
#commitClipboard {
  cursor: pointer;
}
</style>
