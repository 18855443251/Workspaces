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
    <div @click="test1">Object.assign合并对象</div>
    <div @click="test2">...合并对象</div>
    <div @click="test3">Object.assign合并数组</div>
    <div @click="test4">Object.assign合并数组</div>
    <div @click="test5">Object.assign合并数组</div>
    <div @click="test6">Object.keys处理对象</div>
    <div @click="test7">Object.keys处理数组</div>
    <div @click="test8">Object.keys处理字符串</div>
    <div @click="test9">Object.values</div>
    <div @click="test10">Object.values和Object.keys</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data1: [],
    };
  },
  methods: {
    test3() {
      // ，Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1
      this.data1 = Object.assign([1, 2, 3], [4, 5]);
      console.log(JSON.stringify(this.data1)); //[4,5,3]
    },
  },
};
</script>

<style scoped></style>
