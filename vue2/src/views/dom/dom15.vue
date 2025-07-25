<template>
  <div>
    <div id="div1">
      <p id="p1">这是一段文字。</p>
      <p id="p2">这是另一段文字。</p>
    </div>
    <button @click="myFunction()">改变所有元素的背景色：</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    myFunction() {
      var myCollection = document.getElementsByTagName("p");
      var i;
      for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
      }
    },
  },
};
</script>

<style scoped>
</style>
