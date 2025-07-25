<template>
  <div>
    <ul>
      <li>1</li>
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
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerText = "2";
    // 插入到父元素的最后一个子元素
    // ul.appendChild(li);
    // 插入到父元素中某个子元素的前面
    ul.insertBefore(li, ul.children[0]);
  },
  methods: {},
};
</script>

<style scoped>
</style>
