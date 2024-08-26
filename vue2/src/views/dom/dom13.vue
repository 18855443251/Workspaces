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
    <div id="div1">
      <p id="p1">这是一段文字。</p>
      <p id="p2">这是另一段文字。</p>
    </div>
    <button @click="myFunction()">删除元素</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    myFunction() {
      var parent = document.getElementById("div1");
      var child = document.getElementById("p1");
      //   从父元素中删除子：
      parent.removeChild(child);
      // 找到要删除的子节点，并使用其 parentNode 属性找到父节点：
      // child.parentNode.removeChild(child);
    },
  },
};
</script>

<style scoped>
</style>
