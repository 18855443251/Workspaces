<!--
 * @Author: your name
 * @Date: 2021-07-27 09:38:09
 * @LastEditTime: 2021-08-25 16:14:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\map\map1.vue
-->
<template>
  <div>
    <div>map4</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.test1();
    // this.test2();
    this.test3();
  },
  methods: {
    test1() {
      let arr = [1, 2, 3, 4, 5];
      let newArr = arr.map((item) => {
        console.log(item);
        return item > 3;
      });
      console.log(newArr); //[false, false, false, true, true]
    },
    test2() {
      let arr = [
        { flag: true, age: "66" },
        { name: '张三' },
        { flag: false, age: "63" },
      ];
      let newArr = arr.map((item) => {
        console.log(item);
        return item.flag;
      });
      console.log(newArr); // [true, undefined, false]
    },
    test3() {
      let arr = [
        { flag: true, age: "66" },
        { name: '张三'},
        { flag: false, age: "63" },
      ];
      let newArr = arr.map((item) => {
        console.log(item);
        return {
          newAge: item.age,
        };
      });
      console.log(newArr);
      // [{"newAge":"66"},{"newAge":undefined},{"newAge":"63"}]
    },
  },
};
</script>

<style scoped></style>
