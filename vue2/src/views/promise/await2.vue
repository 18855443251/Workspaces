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
    this.geData();
  },
  methods: {
    // await右侧的表达式一般为promise对象，但也可以是其它的值、
    // 如果表达式是promise对象，await返回的是promise成功的值
    // 如果表达式是其它值，直接将此值作为await的返回值
    // await必须写在async函数中，但async函数中可以没有await
    // 如果await的promise失败了 就会抛出异常，需要try catch处理
    async geData() {
      let a = await this.test1();
      console.log(a, "a");
      // 不加try catch await会阻断后面的代码
      try {
        let b = await this.test3();
        console.log(b, "b"); //
      } catch (error) {
        console.log(error, "error");
      }
      let c = await this.test2();
      console.log(c, "c");
      let d = await 2;
      console.log(d, "d");
      let e = await this.test4();
      console.log(e, "e");
    },
    test1() {
      return "成功";
    },
    test2() {
      return new Promise((resolve, reject) => {
        resolve("成功");
      });
    },
    test3() {
      return Promise.reject("失败");
    },
    async test4() {
      return "成功";
    },
  },
};
</script>
<style scoped>
</style>