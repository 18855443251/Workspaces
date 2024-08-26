
<template>
  <div class="cardBox_view">
    <div>
      <slot name="left" msg="张三">左边</slot>
    </div>
    <div>
      <slot name="right" :option1="item">右边</slot>
    </div>
    <div>
      <slot name="default" msg="张三" :option1="item">默认</slot>
    </div>
     <div>
      <slot name="test" msg="张三" :option1="item">默认</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      item: {
        name: "张三1",
        age: "53",
      },
    };
  },

  methods: {},
};
</script>
<style scoped>
</style>
