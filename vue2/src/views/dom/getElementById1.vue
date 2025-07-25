<template>
  <div>
    <div id="test">id选择器1</div>
    <p>标签</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // 直接获取元素
    let div = document.getElementById("test");
    div.style.color = "red";
    console.log(div);
  },
  methods: {},
};
</script>

<style scoped>
</style>
