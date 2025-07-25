<template>
  <div>
    <p id="demo">测试</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // 访问 innerHTML 属性等同于访问首个子节点的 nodeValue：
    console.log(document.getElementById("demo").firstChild.nodeValue);//测试
    console.log(document.getElementById("demo").childNodes[0].nodeValue);//测试
    console.log(document.getElementById("demo").nodeName);//p
      console.log(document.getElementById("demo").nodeValue );//null
    // console.log((document.body.innerHTML))
    // console.log((document.documentElement.innerHTML))
  },
  methods: {},
};
</script>

<style scoped>
</style>
