<template>
  <div>
    <div>{{ object1.bankList }}</div>
    <div>{{ object1.age }}</div>
    <div>{{ object1.test() }}</div>
  </div>
</template>

<script>
import object1 from "./js/exportDefault/object.js";
export default {
  name: "home",
  data() {
    return {
      object1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
