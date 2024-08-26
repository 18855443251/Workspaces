<script setup>
import { watch, ref } from "vue";
const userInfo = ref({
  name: "张三",
  age: 0,
});
// 在不开启deep的前提下，侦听age的变化，只有age变化时才执行回调
watch(
  () => userInfo.value.age,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    deep: true,
  }
);
// 监听多个

const add = () => {
  userInfo.value.age++;
};
</script>

<template>
  <div>count{{ userInfo }}</div>
  <div @click="add">点击改数字</div>
</template>
