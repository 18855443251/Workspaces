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
