<script setup>
import { watch, ref } from "vue";
const count = ref(0);
const name = ref("张三");
// watch(count, (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// });
// 同时侦听多个响应式数据的变化，不管哪个数据变化都需要执行回调
watch(
  [count, name],
  (newArr, oldArr) => {
    console.log(newArr, oldArr);
  },
  {
    immediate: true,
  }
);
const add = () => {
  count.value++;
};
const changeName = () => {
  name.value = "李四";
};
</script>

<template>
  <div>count{{ count }}</div>
  <div>name{{ name }}</div>
  <div @click="add">点击改数字</div>
  <div @click="changeName">点击改名字</div>
</template>
