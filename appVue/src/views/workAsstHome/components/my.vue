<template>
  <div>
    <div class="test" @click="test">我的我的我的我的我的我的</div>
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
  methods: {
    test() {
      this.$router.push({
        path: "theme",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.test {
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
