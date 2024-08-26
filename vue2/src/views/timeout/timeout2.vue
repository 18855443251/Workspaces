<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:00:43
 * @LastEditors: Please set LastEditors
 * @Description:定时器
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <div>主线程上宏任务、微任务执行顺序</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test1();
  },
  methods: {
    // Promise 本身是同步的 promise的回调then和catch是异步的
    // 主线程上宏任务、微任务执行顺序
    test() {
      console.log("1");
      setTimeout(() => {
        console.log("2");
      }, 0);
      new Promise((resolve, reject) => {
        console.log("3");
        resolve();
      }).then(() => {
        console.log("4");
      });
      console.log("5");
    }, //1 3 5 4 2
    test1() {
      console.log("1");
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("8");
        }, 0);
        resolve();
      }).then(() => {
        setTimeout(() => {
          console.log("3");
        }, 0);
        console.log("4");
      });
      console.log("6");
      setTimeout(() => {
        new Promise((resolve, reject) => {
          console.log("2");
          resolve();
        }).then(() => {
          console.log("7");
        });
      }, 0);
      console.log("5"); //1 6 5 4 8 2 7 3
    },
  },
};
</script>

<style scoped></style>
