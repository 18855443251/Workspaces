<!--
 * @Author: your name
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-11 16:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\tankuan.vue
-->
<template>
  <div>
    <div @click="test">Alert</div>
    <div @click="test1">Alert</div>
    <div @click="test2">Alert</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      pickerData1: [],
    };
  },
  created() {},
  methods: {
    test() {
      this.Alert("测试");
    },
    test1() {
      var a = {
        title: "温馨提示",
        content: "转账",
      };
      this.Alert(a);
    },
  },
};
</script>

<style scoped></style>
