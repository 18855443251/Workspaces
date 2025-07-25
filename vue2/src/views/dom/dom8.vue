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
