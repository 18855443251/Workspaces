<script setup>
import { reactive, ref } from "vue";
import myInput from "./components/my-input.vue";
const message = ref("消息");
</script>

<template>
<!-- ，自定义组件上使用v-model, 相当于传递一个modelValue属性，同时触发 update:modelValue 事件 -->
  <my-input v-model="message"></my-input>
  <div>{{message}}</div>
</template>
