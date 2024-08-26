<template>
  <div>
    <div class="gg">闭包</div>
  </div>
</template>
<script>
import tab from "@/components/tab";
export default {
  components: {
    tab,
  },
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // this.test1();
    this.test2();
  },
  methods: {
    // 函数可以引用外部的变量和参数
    test1() {
      function outer() {
        const a = 1;
        function inner() {
          console.log(a);
        }
        return inner;
      }
      const fn = outer();
      console.log(fn);
      fn();
    },
    test2() {
      function outer() {
        const a = 1;
        return function () {
          console.log(a);
        };
      }
      const fn = outer();
      console.log(fn);
      fn();
    },
  },
};
</script>

<style scoped>
.gg {
  display: flex;
  flex-direction: row;
}
div {
  margin-right: 60px;
}
.test {
  margin-left: 20px;
}
</style>
