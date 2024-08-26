<template>
  <div>
    <div>数组原型</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // // 数组原型添加一个方法
    Array.prototype.getLength = function () {
      console.log(this.length);
    };
    let list = [{ name: "花花" }, { name: "草草" }];
    for (let i in list) {
      console.log(i);
    }
  },
  methods: {},
};
</script>

<style scoped></style>
