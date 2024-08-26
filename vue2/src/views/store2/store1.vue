    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-11 14:06:49
 * @LastEditors: Please set LastEditors
 * @Description:对象调用
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="test">
      <div>{{ $store.state.user.name }}</div>
      <div>{{ $store.state.user.lockNum }}</div>
      <div>{{ $store.state.user.nowMenuId }}</div>
      <div>{{ $store.state.app.sidebar.show }}</div>
      <div @click="test">重置状态</div>
      <input type="text" class="search" ref="search" />
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      LOCK_NUM: 20, // 倒计时锁屏
      timer: null,
    };
  },
  created() {
    this.$store.commit("user/SET_NOW_MENUID", "菜单");
    this.$store.commit("user/SET_NAME", "李四");
    this.$store.dispatch("app/sidebarStatusShow", 2);
    window.addEventListener(
      "keydown",
      this.debounce(this.handleScroll, 300),
      true
    ) ||
      window.addEventListener(
        "click",
        this.debounce(this.handleScroll, 300),
        true
      ) ||
      window.addEventListener(
        "mousewheel",
        this.debounce(this.handleScroll, 300),
        true
      ) ||
      window.addEventListener(
        "DOMMouseScroll",
        this.debounce(this.handleScroll, 300),
        false
      );
    this.times();
  },
  methods: {
    times() {
      console.log(this.$store.state.user.lockNum, "锁屏时间");
      this.$store.dispatch(
        "user/setLockNum",
        this.$store.state.user.lockNum - 1
      );
      this.timer = setTimeout(this.times, 1000);
      if (this.$store.state.user.lockNum <= 0) {
        console.log(this.LOCK_NUM, "开始锁屏");
        this.$store.dispatch("user/setLockNum", this.LOCK_NUM);
        clearTimeout(this.timer);
      }
    },
    handleScroll() {
      console.log("键盘、点击、滚动");
      this.$store.dispatch("user/setLockNum", 20);
    },
    // 函数防抖
    debounce(func, wait) {
      let timeout;
      return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    },
    test() {
      this.$store.dispatch("user/resetState");
      console.log(this.$store, "状态");
    },
  },
};
</script>

<style scoped>
.test{
  height: 1800px;
}
</style>
