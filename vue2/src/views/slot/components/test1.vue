
<template>
  <div class="cardBox_view">
    <slot name="header">头部</slot>
    <div>
      <div class="header_left" v-if="$slots.left">
        <slot name="left">左边</slot>
      </div>
      <div class="header_right" v-if="$slots.right">
        <slot name="right">右边</slot>
      </div>
    </div>
    <slot name="footer">头部</slot>
    <div v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      lastname: "张三",
    };
  },

  methods: {},
};
</script>
<style scoped>
.test1 {
  background: red;
}
.header_right {
  background: blue;
}
.header_left {
  background: orange;
}
</style>
