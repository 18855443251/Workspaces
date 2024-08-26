<script setup>
import { reactive, ref } from "vue";
// 主要是用来定义 Options API 的选项。可以用
// defineOptions 定义任意的选项，
defineOptions({
  name: "basic",
});
const message = "消息";
const age = ref(0);
const state = ref({
  count: 0,
});
const add = () => {
  state.value.count++;
  age.value++;
  console.log(message);
  console.log(age.value);
  console.log(state.value.count);
};
</script>

<template>
  <div @click="add">{{ message }}</div>
  <div>数字{{ state.count }}</div>
  <div>年龄：{{ age }}</div>
</template>
