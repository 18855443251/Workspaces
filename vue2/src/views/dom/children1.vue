    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <ul>
      <li><p>好好</p></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // 查找所有子节点
    // ul.children和querySelectorAll1等价 选择的是亲儿子
    let ul = document.querySelector("ul");
    // ul.childNodes
    console.log(ul.children);
  },
  methods: {},
};
</script>

<style scoped>
</style>
