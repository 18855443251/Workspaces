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
    <div class="tess">
      <img src="@/assets/img/close.png" class="row-img" />
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
.tess {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(16, 159, 80);
}
.row-img{
    background: red;
}
</style>