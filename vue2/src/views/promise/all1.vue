<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:13:17
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
    let a1 = this.test1();
    let a2 = this.test2();
    let a3 = this.test3();
    console.log(a1,'gg')
    //Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调
    //all接收一个数组参数，里面的值最终都算返回Promise对象
    //all会把所有异步操作的结果放进一个数组中传给then，就是下面的results
    // all方法的效果实际上是「谁跑的慢，以谁为准执行回调」
    Promise.all([a1, a2, a3])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    test1() {
      return new Promise((resolve, reject) => {
        resolve("1");
      });
    },
    test2() {
      return new Promise((resolve, reject) => {
        resolve("2");
      });
    },
    test3() {
      return Promise.resolve("3");
    },
  },
};
</script>
<style scoped>
</style>