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
    // appendChild() 方法，追加新元素作为父的最后一个子。
    // 创建了一个新的 <p> 元素：
    var para = document.createElement("p");
    // <p> 元素添加文本，则必须首先创建文本节点。
    var node = document.createTextNode("这是新的文本。");
    // 您需要向 <p> 元素追加这个文本节点：
    para.appendChild(node);
    // 查找一个已有的元素：
    var element = document.getElementById("div1");
    // 向这个已有的元素追加新元素：
    element.appendChild(para);
  },
  methods: {},
};
</script>

<style scoped>
</style>
