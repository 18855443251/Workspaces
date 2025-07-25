<template>
  <div>
    <div id="div1">
      <p id="p1">这是一段文字。</p>
      <p id="p2">这是另一段文字。</p>
    </div>
    <button @click="myFunction()">替换元素</button>
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
      var para = document.createElement("p");
      var node = document.createTextNode("这是新的文本。");
      para.appendChild(node);
      parent.replaceChild(para, child);
    },
  },
};
</script>

<style scoped>
</style>
