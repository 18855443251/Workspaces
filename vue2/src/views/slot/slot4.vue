
<template>
  <div class="cardBox_view">
    <div>作用域插槽</div>
    <test>
      <!-- 解构插槽 v-slot等于#default等于slot-scope-->
      <template v-slot="{ tableList }">
        <span>{{ tableList }}</span>
      </template>
    </test>
  </div>
</template>
<script>
import test from "./components/test4";
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
