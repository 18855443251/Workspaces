<template>
  <div>
    <div class="test">我的</div>
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
    console.log("我的");
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.test {
  color: var(--primary-color);
}
</style>
