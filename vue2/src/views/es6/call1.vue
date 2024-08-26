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
    let obj = {
      name: "张三",
    };
    function test(x, y) {
      console.log(this);
      console.log(x + y);
    }
    // 使用 call 方法调用函数，同时指定被调用函数中 this 的值
    test.call(obj, 1, 2);
  },
  methods: {},
};
</script>

<style scoped></style>
