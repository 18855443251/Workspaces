<script setup>
import { reactive, ref } from "vue";
import { useCounterStore } from "../../stores/counter.js";
const counterStore = useCounterStore();
const { getList } = counterStore;
</script>

<template>
  <div>
    <div>{{ counterStore.count }}-{{ counterStore.doubleCount }}</div>
    <div @click="counterStore.increment">相加</div>
    <div @click="counterStore.subcrement">相减</div>
    <div @click="counterStore.getList">获取数据</div>
    <div>{{ counterStore.list }}</div>
  </div>
</template>
