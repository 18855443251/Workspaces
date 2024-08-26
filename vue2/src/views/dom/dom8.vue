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
    var x = document.getElementById("myBtn");
    x.addEventListener("mouseover", this.myFunction);
    x.addEventListener("click", this.mySecondFunction);
    x.addEventListener("mouseout", this.myThirdFunction);
    window.addEventListener("resize", function () {
      document.getElementById("demo").innerHTML = Math.random();
    });
  },
  methods: {
    myFunction() {
      document.getElementById("demo").innerHTML += "Moused over!<br>";
    },
    mySecondFunction() {
      document.getElementById("demo").innerHTML += "Clicked!<br>";
    },
    myThirdFunction() {
      document.getElementById("demo").innerHTML += "Moused out!<br>";
    },
  },
};
</script>

<style scoped>
</style>
