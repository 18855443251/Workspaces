<script setup>
import { reactive, ref } from "vue";
const message = ref("消息");
const add = () => {
  console.log("点击");
};
// 默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给父组件访问的，可以通过defineExpose编译宏指定哪些属性和
// 方法允许访问
defineExpose({
  message,
  add,
});
</script>

<template>
  <div>{{ message }}</div>
</template>
