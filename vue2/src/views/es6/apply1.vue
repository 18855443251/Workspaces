<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:05
 * @LastEditors: Please set LastEditors
 * @Description: Object.assign合并对象
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div>let</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    const obj = {
      age: 18,
    };
    function fn(x, y) {
      console.log(this); // {age: 18}
      console.log(x + y);
    }
    // 1. 调用函数
    // 2. 改变this指向
    //  fn.apply(this指向谁, 数组参数)
    fn.apply(obj, [1, 2]);
    // 3. 返回值   本身就是在调用函数，所以返回值就是函数的返回值
    // 使用场景： 求数组最大值
    // const max = Math.max(1, 2, 3)
    // console.log(max)
    const arr = [100, 44, 77];
    const max = Math.max.apply(Math, arr);
    const min = Math.min.apply(null, arr);
    console.log(max, min);
    // 使用场景： 求数组最大值
    console.log(Math.max(...arr));
  },
  methods: {},
};
</script>

<style scoped></style>
