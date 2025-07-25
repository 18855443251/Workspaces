<template>
  <div class="claneCache_view">
    <button>删除</button>
    <ul>
      <li>熊大</li>
      <li>熊二</li>
      <li>光头强</li>
    </ul>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {};
  },
  mounted() {
    // 1.获取元素
    var ul = document.querySelector("ul");
    var btn = document.querySelector("button");
    // 2. 删除元素  node.removeChild(child)
    // ul.removeChild(ul.children[0]);
    // 3. 点击按钮依次删除里面的孩子
    btn.onclick = function () {
      if (ul.children.length == 0) {
        this.disabled = true;
      } else {
        ul.removeChild(ul.children[0]);
      }
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>