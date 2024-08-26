
<template>
  <div class="cardBox_view">
    <test>
      <template #left="obj2">
        <span>{{ obj2 }}</span>
      </template>
      <template #right="obj3">
        <span>{{ obj3 }}</span>
      </template>
      <template #default="obj1">
        <span>{{ obj1 }}</span>
      </template>
        <template #test="{msg}">
        <span>{{ msg }}</span>
      </template>
      <!-- <template v-slot="{ option1 }">
        <span>{{ option1 }}</span>
      </template> -->
    </test>
  </div>
</template>
<script>
import test from "./components/test6";
export default {
  components: { test },
  name: "Login",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
</style>
