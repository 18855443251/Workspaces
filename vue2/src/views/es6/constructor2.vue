    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 16:48:14
 * @LastEditors: Please set LastEditors
 * @Description:业务早报
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div>constructor 属性返回所有 JavaScript 变量的构造函数。</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      fruits: ["Banana", "Orange", "Apple"],
    };
  },
  created() {
    this.test();
    // this.test1();
    // this.test2();
  },
  methods: {
    test() {
      console.log("Bill".constructor);
      console.log((3.14).constructor);
      console.log(false.constructor);
      console.log([1, 2, 3, 4].constructor);
      console.log({ name: "Bill", age: 19 }.constructor);
      console.log(new Date().constructor);
      console.log(function () {}.constructor);
    },
    test1() {
      let fruits = this.isArray(this.fruits);
      console.log("fruits", fruits);
    },
    // 所有数组的constructor()引用值都是 “[]”。
    isArray(myArray) {
      console.log("myArray", myArray.constructor);
      console.log(myArray.constructor === Array);
      return myArray.constructor.toString().indexOf("Array") > -1;
    },
    test2() {
      let arr = [1, 2];
      let res = arr.constructor();
      console.log(res);
    },
  },
};
</script>
<style scoped>
</style>
