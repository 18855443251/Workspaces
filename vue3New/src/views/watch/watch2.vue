<script setup>
import { watch, ref } from "vue";
const userInfo = ref({
  name: "张三",
  age: 0,
});
// 通过watch监听的ref对象默认是浅层侦听的，直接修改嵌套的对象属性不会触发回调执行，需要开启deep
watch(
  userInfo,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    deep: true,
  }
);
const add = () => {
  userInfo.value.age++;
};
</script>

<template>
  <div>count{{ userInfo }}</div>
  <div @click="add">点击改数字</div>
</template>
