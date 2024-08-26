<script setup>
import { reactive, ref, inject } from "vue";
const message = inject("sendMessage");
const count = inject("count");
const changeCount = inject("changeCount");
const test = () => {
  changeCount(1000);
};
</script>

<template>
  <div>{{ message }}-{{ count }}</div>
  <div @click="test">底层组件</div>
</template>
