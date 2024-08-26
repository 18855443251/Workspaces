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
    // remove() 删除已有 HTML 元素
    // remove() 方法在旧浏览器中不起作用，
    myFunction() {
      var x = document.getElementById("div1");
      var y = x.getElementsByTagName("p")[0];
      y.remove();
      //   document.getElementById("p1").remove();
    },
  },
};
</script>

<style scoped>
</style>
