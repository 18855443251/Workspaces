<template>
  <div>
    <div class="test">首页首页首页首页首页首页</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  created() {
    console.log("首页");
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.test {
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
