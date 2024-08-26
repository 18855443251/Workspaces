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
    <ul id="main">
      <li class="test1">子标签1</li>
      <li>子标签2</li>
    </ul>
    <a name="html" href="/html/index.asp">HTML 教程</a><br />
    <a name="css" href="/html/index.asp">CSS 教程</a><br />
    <a name="xml">XML 教程</a><br />
    <div>本文档中的锚点数量为{{ num }}</div>
    <img
      id="myImage"
      src="/i/photo/tulip.jpg"
      alt="flower"
      width="180"
      height="180"
    />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      num: "",
    };
  },
  mounted() {
    //本例查找 id="main" 的元素，然后查找 "main" 中所有 <li> 元素：
    var x = document.getElementById("main");
    var y = x.getElementsByTagName("li");
    y[1].innerHTML = "子标签2修改";
    // 本文档中的锚点数量为
    this.num = document.getElementsByTagName("a").length;
    document.getElementById("myImage").src = require("@/assets/img/agree.png");
  },
  methods: {},
};
</script>

<style scoped>
</style>
