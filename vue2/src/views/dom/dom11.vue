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
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    var para = document.createElement("p");
    var node = document.createTextNode("这是新的文本。");
    para.appendChild(node);
    var element = document.getElementById("div1");
    var child = document.getElementById("p1");
    element.insertBefore(para, child);
  },
  methods: {},
};
</script>

<style scoped>
</style>
