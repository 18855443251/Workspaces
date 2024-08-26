<template>
  <div>
    <div>
      <div>防抖输入<input type="text" @input="inputHandler1" /></div>
      <button @click="clickHandler1">节流点击</button>
    </div>
  </div>
</template>

<script>
import { debounce, throttle } from "@/utils/debounce1.js";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {
    inputHandler1: debounce(function () {
      console.log("防抖输入");
    }),
    clickHandler1: throttle(function () {
      console.log("节流点击");
    }),
  },
};
</script>

<style scoped>
</style>
