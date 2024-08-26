<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      name: "",
    };
  },
  created() {
    // this.getData1();
    this.doIt();
  },
  methods: {
    doIt() {
      console.log("doIt");
      const time1 = 1000;
      this.test(time1)
        .then((time2) => this.test(time2))
        .then((time3) => this.test(time3))
        .then((result) => {
          console.log(`result is ${result}`);
        });
    },
    async getData() {
      let res = await new Promise((resolve) => {
        setTimeout(() => resolve(2000), 3000);
      });
      console.log(res);
      console.log("后面执行");
    },
    async getData1() {
      const time1 = 3000;
      const time2 = await this.test(time1);
      console.log(time2, "3秒后返回");
      const time3 = await this.test(time2);
      console.log(time3, "5秒后返回");
      const result = await this.test(time3);
      console.log(result, "7秒后返回");
    },
    test(n) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(n + 2000), n);
      });
    },
  },
};
</script>
<style scoped></style>
