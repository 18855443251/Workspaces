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
    <div>宏任务中包含微任务</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // this.test();
    this.test1();
  },
  methods: {
    // 宏任务中包含微任务
    test() {
      setTimeout(() => {
        console.log("1");
        setTimeout(() => {
          console.log("2");
        }, 0);
        new Promise((resolve) => {
          resolve();
          console.log("3");
        }).then(() => {
          console.log("4");
        });
      }, 0);
      setTimeout(() => {
        console.log("5");
      }, 0);
      console.log("6"); //6 1 3 4 5  2
    },
    test1() {
      setTimeout(() => {
        console.log("1");
        setTimeout(() => {
          console.log("2");
        }, 0);
        new Promise((resolve) => {
          resolve();
          console.log("3");
        }).then(() => {
          console.log("4");
        });
      }, 0);
      setTimeout(() => {
        console.log("5");
      }, 100);
      console.log("6"); //613425
    },
  },
};
</script>

<style scoped></style>
