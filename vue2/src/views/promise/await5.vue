<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{ name }}</div>
  </div>
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
    this.test2();
  },
  methods: {
    test1(num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2 * num);
        }, 1000);
      });
    },
    async test2() {
      // 第一种写法
      let a = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2 * 2);
        }, 1000);
      });
      let b = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2 * 4);
        }, 1000);
      });
      let c = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2 * 5);
        }, 1000);
      });
      console.log(a, b, c);
      // 第二种写法
      // try {
      //   // await后面通常放的是一个Promise对象
      //   let a = await this.test1("2");
      //   let b = await this.test1(4);
      //   let c = await this.test1(5);
      //   console.log(a, b, c);
      // } catch (err) {
      //   console.log(err);
      // }
    },
  },
};
</script>
<style scoped>
</style>