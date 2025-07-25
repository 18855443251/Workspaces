<template>
  <div>
    <div @click="test3">Object.assign合并数组</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data1: [],
    };
  },
  methods: {
    test3() {
      // ，Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1
      this.data1 = Object.assign([1, 2, 3], [4, 5]);
      console.log(JSON.stringify(this.data1)); //[4,5,3]
    },
  },
};
</script>

<style scoped></style>
