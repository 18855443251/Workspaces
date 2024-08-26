<script setup>
import { reactive, ref } from "vue";
import { useCounterStore } from "../../stores/counter.js";
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
// 使用storeToRefs函数可以辅助保持数据（state + getter）的响应式解构
const { count, doubleCount, list } = storeToRefs(counterStore);
const { increment, subcrement, getList, $reset } = counterStore;
</script>

<template>
  <div>
    <div>{{ count }}-{{ doubleCount }}</div>
    <div @click="increment">相加</div>
    <div @click="subcrement">相减</div>
    <div @click="getList">获取数据</div>
    <div>{{ list }}</div>
    <div @click="$reset">重置</div>
  </div>
</template>
