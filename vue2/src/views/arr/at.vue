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
    this.test1()
  },
  methods: {
    test1() {
      // at()通过元素下标直接获取数组的元素
      let arr = ["1", 3, "4", "苹果"];
      console.log(arr.at(2)); //4
      console.log(arr.at(-2)); //4
      console.log(arr[arr.length-1])
    },
  },
};
</script>

<style scoped></style>
