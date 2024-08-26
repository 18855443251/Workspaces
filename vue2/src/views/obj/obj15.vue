<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      console.log(Math.max(1, 2, 3)); // 3
      console.log(Math.max.apply(null, [1, 2, 3])); // 3
      console.log(Math.max.apply("", [1, 2, 3])); // 3
    },
  },
};
</script>
<style scoped></style>
