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
    <p class="test">标签1</p>
    <p class="test">标签2</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    let p1 = document.getElementsByClassName("test");
    for (let i = 0; i < p1.length; i++) {
      p1[i].style.color = "red";
    }
    console.log(p1);
  },
  methods: {},
};
</script>

<style scoped>
</style>
