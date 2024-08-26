<script setup>
import { reactive, ref, provide } from "vue";
import inject1 from "./components/inject1.vue";
provide("sendMessage", "消息");
const count = ref(0);
provide("count", count);
setTimeout(() => {
  count.value = 200;
}, 2000);
provide("changeCount", (value) => {
  count.value = value;
});
</script>

<template>
  <inject1></inject1>
</template>
