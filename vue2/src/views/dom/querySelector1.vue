<template>
  <div>
    <div class="test">类选择器1</div>
    <div class="test">类选择器2</div>
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
    // CSS选择器匹配的第一个元素,一个 HTMLElement对象。
    // 如果没有匹配到，则返回null
    let div = document.querySelector(".test");
    div.style.color = "red";
    // div.innerHTML = "<strong>改变内容</strong>";//能解析标签
    div.innerText = "<strong>改变内容</strong>"; //不能解析标签
    console.log(div);
  },
  methods: {},
};
</script>

<style scoped>
</style>
