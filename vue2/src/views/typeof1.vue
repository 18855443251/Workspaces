<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div>数据类型</div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {};
  },
  created() {
    this.test();
    this.test1();
    this.test2();
  },
  methods: {
    test() {
      console.log(Number(1)); //1
      console.log(Number("1")); //1
      console.log(Number(1.21)); //1.21
      console.log(Number([13.56])); //13.56
      console.log(Number(["13.2300"])); //13.23
      console.log(Number(true)); //1
      console.log(Number("")); //0
      console.log(Number("   ")); //0
      console.log(Number([])); //0
      console.log(Number(null)); //0
      console.log(Number(undefined)); //NaN
      console.log(Number({})); //NaN
      console.log(Number("null")); //NaN
      console.log(Number([1, 2, 3])); //NaN
      console.log(Number("true")); //NaN
      console.log(null === undefined); // false
      console.log(null == undefined); // true
    },
    test1() {
      console.log(typeof true); //'boolean'
      console.log(typeof "123"); //'string'
      console.log(typeof 123); //'number'
      console.log(typeof NaN); //'number'
      console.log(typeof undefined); // undefined
      console.log(typeof null); // object
      console.log(typeof []); // object
      console.log(typeof new Date()); // object
      console.log(typeof new RegExp()); // object
      console.log(typeof Math); // object
      console.log(typeof {}); // object
      console.log(typeof function myFunc() {}); // 返回 "function"
      // NaN 属于 JavaScript 保留词，指示某个数不是合法数。
      // NaN 是数，typeof NaN 返回 number：
      // typeOf Infinity 返回 number。
    },
    test2() {
      let a = [];
      let b = Array.prototype.slice.call(a);
      console.log(typeof b);
    },
  },
};
</script>
<style scoped>
</style>