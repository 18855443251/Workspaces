
<template>
  <div>
    <div>call</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    let obj = {
      name: "张三",
    };
    function test(x, y) {
      console.log(this);
      console.log(x + y);
    }
    // 使用 call 方法调用函数，同时指定被调用函数中 this 的值
    test.call(obj, 1, 2);
  },
  methods: {},
};
</script>

<style scoped></style>
