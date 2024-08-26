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
    <!-- 左边宽度固定，右边撑满容器 -->
    <div class="container">
      <div class="left">左边固定宽度</div>
      <div class="right">自适应自适应</div>
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
  height: 200px;
  background-color: #72e4a0;
}

.right {
  flex: 1;
  height: 200px;
  background-color: #9dc3e6;
}
</style>