
<template>
  <div class="cardBox_view">
    <div>作用域插槽</div>
    <test2>
      <template v-slot="{ option1 }">
        <span>{{ option1.desc }}</span>
      </template>
    </test2>
  </div>
</template>
<script>
import test2 from "./components/test2";
export default {
  components: { test2 },
  name: "Login",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
</style>
