<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
    <div @click="test">改变颜色</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "red",
      color2: "orange",
    };
  },
  methods: {
    test() {
      this.color1 = "green";
    },
  },
};
</script>

<style>
</style>