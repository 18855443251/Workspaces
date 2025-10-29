<template>
  <div class="claneCache_view">
    <div @click="test" class="test">原有套餐</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {
      window.location.href = "http://localhost:8080/#/window2?shopFlag=测试";
    },
  },
};
</script>
<style scoped>
.test {
  font-size: 28px;
}
</style>
