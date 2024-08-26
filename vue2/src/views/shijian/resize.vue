    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:17:54
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div id="son">儿子</div>
  </div>
</template>

<script>
import "@/myTool/myTool.js";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("resize", this.test);
  },
  methods: {
    test() {
      console.log(myTool.client().width);
      if (myTool.client().width > 700) {
        document.body.style.background = "red";
      } else {
        document.body.style.background = "blue";
      }
    },
  },
};
</script>

<style scoped>
</style>
