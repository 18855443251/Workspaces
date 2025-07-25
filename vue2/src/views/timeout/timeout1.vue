<template>
  <div>
    <!-- Fix display format using computed property -->
    <div v-for="(item, index) in timeList" @click="test" :key="index">
      {{ formattedTime(item.time) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "timeout1",
  data() {
    return {
      timer: null,
      timeList: [{ time: 0 }], // Start from 0 seconds
    };
  },
  created() {
    this.startTimer();
  },
  activated() {
    console.log(this.$route.meta, "activated");
    // if (this.$route.meta.refresh) {
    //   this.$route.meta.refresh = false;
    this.startTimer();
    // }
  },
  methods: {
    startTimer() {
      console.log("activated2");
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.timeList.forEach((item) => {
          item.time++;
        });
      }, 1000);
    },
    formattedTime(seconds) {
      console.log(seconds);
      // Convert seconds to mm:ss format
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null; // Critical: nullify reference
      }
    },
    test() {
      this.jump("/timeout2");
    },
  },
  // <keep-alive> 缓存机制影响
  // 如果当前组件被包裹在 Vue 的 <keep-alive> 标签内，组件离开时不会触发 beforeDestroy 生命周期钩子，而是进入 deactivated 状态。
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  //   this.stopTimer();
  // },
  // beforeRouteLeave函数体内可以获取到this实例
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    this.stopTimer();
    next(); // 必须调用 next() 继续导航
  },
  // 1. 添加 deactivated 钩子处理 keep-alive 场景
  deactivated() {
    this.stopTimer();
  },
};
</script>