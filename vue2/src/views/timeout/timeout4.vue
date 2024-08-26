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
    this.test2();
  },
  methods: {
    test() {
      // promise本身是同步的，promise的回调then和catch是异步
      // 代码执行顺序：先执行同步任务再执行异步任务 异步任务里面先执行同步代码然后微任务然后宏任务，遇到await就会阻断后续代码，在执行完await同行代码后跳出async执行完async外所有的同步代码后再执行await后面的代码
      async function async1() {
        console.log("1");
        await async2();
        console.log("2");
      }
      new Promise((resolve) => {
        console.log("6");
        resolve();
      }).then(() => {
        console.log("7");
      });
      async function async2() {
        console.log("3");
      }
      console.log("4");
      setTimeout(() => {
        console.log("5");
      }, 0);

      async1();

      console.log("8"); //6 4 1 3 8 7 2 5
    },
    test1() {
      console.log("1");
      new Promise((resolve) => {
        console.log("2");
        setTimeout(() => {
          console.log("3");
        }, 0);
        resolve();
      }).then(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
        }, 0);
      });
      const promise1 = Promise.resolve().then(() => {
        console.log("6");
        setTimeout(() => {
          console.log("7"); //1 2 8 10 12 4 6 9 3 11 5 7
        }, 0);
      });
      async function async1() {
        console.log("8");
        await async2();
        console.log("9");
      }
      async function async2() {
        console.log("10");
      }
      async1();
      setTimeout(() => {
        console.log("11");
      }, 0);
      console.log("12");
    },
    test2() {
      new Promise((resolve) => {
        console.log("2");
        setTimeout(() => {
          console.log("3");
        }, 0);
        resolve();
      }).then(() => {
        console.log("4");
        setTimeout(() => {
          console.log("5");
        }, 0);
      });
      setTimeout(() => {
        console.log("7");
      }, 0);
      console.log("1");  // 2 1  4 3 7 5
    },
  },
};
</script>

<style scoped></style>
