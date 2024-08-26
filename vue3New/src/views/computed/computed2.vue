<script setup>
import { computed, ref } from "vue";
const TYPEMAP = {
  1: "24小时热榜",
  2: "周热榜",
};
const title = computed(() => TYPEMAP[1]);
</script>

<template>
  <div>{{ title }}</div>
</template>
