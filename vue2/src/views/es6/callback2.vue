<!--
 * @Author: your name
 * @Date: 2022-06-29 10:49:00
 * @LastEditTime: 2022-06-29 10:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\callback\callback1.vue
-->
<template>
  <div class="page">
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      msg: "",
    };
  },
  created() {
    // setTimeout(function myFunction() {
    //   console.log("I love You"); //10
    // }, 3000);
    // setTimeout(this.myFunction, 3000);
    this.myCalculator(5, 5, this.myDisplayer);
  },
  methods: {
    myFunction() {
      console.log("I love You1"); //10
    },
    myCalculator(num1, num2, myCallback) {
      console.log(myCallback,'myCallback');
      let sum = num1 + num2;
      myCallback(sum);
    },
    myDisplayer(some) {
      console.log(some); //10
    },
  },
};
</script>
<style scoped>
</style>