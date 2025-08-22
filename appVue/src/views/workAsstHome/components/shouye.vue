<template>
  <div>
    <div class="test">首页</div>
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
// @import '~@/assets/styles/themes/default/variables.less'; // 引入变量文件
.test {
  // color: @primary-color;
}
</style>
