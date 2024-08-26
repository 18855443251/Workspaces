<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // this.test();
    // this.test1();
    this.test2();
  },
  methods: {
    test() {
      let sum = 0;
      function test() {
        for (let i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }
        return sum;
      }
      let a = test(1, 2, 3);
      console.log(a);
    },
    test1() {
      let sum = 0;
      function test(...arr) {
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      }
      let a = test(1, 2, 3, 4);
      console.log(a);
    },
    test2() {
      let sum = 0;
      function test(a, b, ...arr) {
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      }
      let a = test(1, 2, 3, 4);
      console.log(a);
    },
  },
};
</script>

<style scoped></style>
