<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div class="container">
      <div class="left">左侧定宽左侧定宽</div>
      <div class="mid">中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适中间自适</div>
      <div class="right">右侧定宽</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.container {
  display: flex;
}

.left {
  width: 200px;
  background-color: #72e4a0;
}

.mid {
  flex: 1;
  background-color: #9dc3e6;
}

.right {
  width: 100px;
  background-color: #4eb3b9;
}
</style>