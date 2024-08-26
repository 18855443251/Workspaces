
<template>
  <div class="cardBox_view">
    <div>动态插槽名</div>
    <test>
      <!-- 解构插槽的具名  v-slot:等于   #-->
      <template #tableList1="obj">
        <span>{{ obj }}</span>
      </template>
      <template v-slot:tableList2="obj">
        <span>{{ obj }}</span>
      </template>
    </test>
  </div>
</template>
<script>
import test from "./components/test5";
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
