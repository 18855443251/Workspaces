<template>
  <div>
    <div class="father">
      <div class="test">类选择器1</div>
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
    // 查找父节点用那个属性？
    let div = document.querySelector(".test");
    div.parentNode.style.color = "red";
    console.log(div)
  },
  methods: {},
};
</script>

<style scoped>
</style>
