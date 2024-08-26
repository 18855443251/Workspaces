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
  },
  methods: {
    // 删除数组中指定索引的元素，返回删除元素的数组 ，返回 splice() 方法会改变原始数组。
    test() {
      var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
      //   console.log(fruits.splice(3)); //'[Apple', 'Mango']
      //   console.log(fruits.splice(1, 3)); //['Orange', 'Lemon', 'Apple']
      //   console.log(fruits.splice(-3, -1)); //[]
      //   console.log(fruits.splice(-3)); //['Lemon', 'Apple', 'Mango']
      //   console.log(fruits.splice(2,0)); //[]
      //   console.log(fruits.splice(2,1)); //['Lemon']
      console.log(fruits.splice(2, 1,"mangguo")); //['Lemon']
      console.log(fruits)// ['Banana', 'Orange', 'mangguo', 'Apple', 'Mango']
    },
  },
};
</script>

<style scoped></style>
