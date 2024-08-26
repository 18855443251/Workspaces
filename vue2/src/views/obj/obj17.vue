<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>给对象原型添加</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    // 对象原型上添加一个方法
    Object.prototype.getLength = function () {
      console.log(this.length);
    };
    let obj = {
      name: "对象",
      size: "780px",
    };
    for (let t in obj) {
      console.log(t);
    }
  },
  methods: {},
};
</script>
<style scoped></style>
