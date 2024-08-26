<script setup>
import { computed, ref } from "vue";
const list = ref([1, 2, 3, 5, 6]);
const newList = computed(() => {
  return list.value.filter((item) => item > 2);
});
const add = () => {
  list.value.push("8");
};
</script>

<template>
  <div>list{{ list }}</div>
  <div>newList{{ newList }}</div>
  <div @click="add">点击</div>
</template>
