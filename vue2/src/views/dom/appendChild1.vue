<template>
  <div>
    <!-- 在指定元素节点的最后一个子节点之后添加节点 -->
    <ul>
      <li></li>
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
    let div = document.querySelector("div");
    div.innerHTML = "测试";
    document.body.appendChild(div);
  },
  methods: {},
};
</script>

<style scoped>
</style>
