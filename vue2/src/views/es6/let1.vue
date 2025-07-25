
<template>
  <div>
    <div>let</div>
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
    this.test();
  },
  methods: {
    test() {
      let flag1 = true;
      let flag = true;
      let arr = [{}, { name: "zli" }];
      if (flag1) {
        let item1 = { name: "张三" };
        for (let item of arr) {
          if (flag) {
            console.log(item1.name);
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
