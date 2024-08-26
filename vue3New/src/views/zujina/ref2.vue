<script setup>
import { onMounted, reactive, ref } from "vue";
import son2 from "./components/son2.vue";
const inp = ref(null);
const son2Ref = ref(null);
const add = () => {
  inp.value.blur();
  console.log(son2Ref.value.message);
  son2Ref.value.add()
};
onMounted(() => {
  console.log(inp.value);
  inp.value.focus();
});
</script>

<template>
  <input type="text" ref="inp" />
  <son2 ref="son2Ref"></son2>
  <div @click="add">点击</div>
</template>
