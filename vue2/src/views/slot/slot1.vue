<template>
  <div class="cardBox_view">
    <test1>
      <!-- v-slot:简写是# -->
      <template #header>
        <div>头部自定义插槽</div>
      </template>
      <template v-slot:left>
        <span>具名插槽左侧</span>
      </template>
      <div slot="right">具名插槽右侧</div>
      <template v-slot:[slotName]> 底部自定义插槽 </template>
      <div>默认插槽</div>
    </test1>
  </div>
</template>
<script>
import test1 from "./components/test1";
export default {
  components: { test1 },
  name: "Login",
  data() {
    return {
      slotName: "footer",
    };
  },

  methods: {},
};
</script>
<style scoped>
</style>
