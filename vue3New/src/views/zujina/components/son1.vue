<script setup>
import { reactive, ref } from "vue";
const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  state: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(["changxCount"]);
const add = () => {
  emit("changxCount", "6");
  console.log(props.message);
};
</script>

<template>
  <div @click="add">{{ message }}</div>
  <div>{{ state.count }}</div>
</template>
