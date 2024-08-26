<script setup>
import { reactive, ref } from "vue";
import son1 from "./components/son1.vue";
const message = "消息";
const state = ref({
  count: 0,
});
const changxCount = (value) => {
  state.value.count = value;
};
</script>

<template>
  <son1 :message="message" :state="state" @changxCount="changxCount"></son1>
</template>
