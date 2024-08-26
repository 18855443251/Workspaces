<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    // 自己定义 数组扩展方法  求和 和 最大值
    // 1. 我们定义的这个方法，任何一个数组实例对象都可以使用
    // 2. 自定义的方法写到  数组.prototype 身上
    // 1. 最大值
    const arr = [1, 2, 3];
    Array.prototype.max = function () {
      // 展开运算符
      return Math.max(...this);
      // 原型函数里面的this 指向谁？ 实例对象 arr
    };
    // 2. 最小值
    Array.prototype.min = function () {
      // 展开运算符
      return Math.min(...this);
      // 原型函数里面的this 指向谁？ 实例对象 arr
    };
    console.log(arr.max());
    console.log([2, 5, 9].max());
    console.log(arr.min());
    // 3. 求和 方法
    Array.prototype.sum = function () {
      return this.reduce((prev, item) => prev + item, 0);
    };
    console.log([1, 2, 3].sum());
    console.log([11, 21, 31].sum());
  },
  methods: {},
};
</script>
<style scoped>
</style>