<template>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
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
    // 上一个兄弟节点
    let ul = document.querySelector("ul li:nth-child(2)");
    console.log(ul.previousElementSibling);
  },
  methods: {},
};
</script>

<style scoped>
</style>
