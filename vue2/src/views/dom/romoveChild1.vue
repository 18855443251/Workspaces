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
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
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
    //若一个节点在页面中已不需要时，可以删除它
    // l 在 JavaScript 原生DOM操作中，要删除元素必须通过父元素删除
    const ul = document.querySelector("ul");
    // console.log(ul)
    ul.removeChild(ul.children[0]);
  },
  methods: {},
};
</script>

<style scoped>
</style>
