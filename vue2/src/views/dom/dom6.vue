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
    <button id="myBtn">试一试</button>
    <p id="demo"></p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    document.getElementById("myBtn").addEventListener("click", this.displayDate);
    // document.getElementById("myBtn").removeEventListener("click", this.displayDate);
  },
  methods: {
    displayDate() {
      document.getElementById("demo").innerHTML = Date();
    },
  },
};
</script>

<style scoped>
</style>
