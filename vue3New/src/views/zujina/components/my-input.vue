<script setup>
import { defineModel, ref } from "vue";
const modelValue = defineModel();
</script>

<template>
<input type="text" :value="modelValue" @input="e=>modelValue=e.target.value">
</template>
