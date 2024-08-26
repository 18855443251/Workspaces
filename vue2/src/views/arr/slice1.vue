<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test();
    this.test1();
  },
  methods: {
    // slice() 方法不会改变原始数组。
    test() {
      var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
      console.log(fruits.slice(3)); //['Apple', 'Mango']
      console.log(fruits.slice(1, 3)); //['Orange', 'Lemon']
      console.log(fruits.slice(-3, -1)); //['Lemon', 'Apple']
      console.log(fruits.slice(-3)); //['Lemon', 'Apple', 'Mango']
    },
    test1() {
      var str = "wuw.runoob.com!";
      console.log(str.slice(3)); //.runoob.com!
      console.log(str.slice(1, 3)); //uw
      console.log(str.slice(-3, -1)); //om
      console.log(str.slice(-3)); //om!
    },
  },
};
</script>

<style scoped></style>
