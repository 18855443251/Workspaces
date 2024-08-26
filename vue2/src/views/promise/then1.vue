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
    // Promise对象上有then、catch方法吧
    // Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作
    // then方法可以接受两个参数，第一个对应resolve的回调，第二个对应reject的回调
    // then里面的函数就跟我们平时的回调函数一个意思
    // then方法中，你也可以直接return数据而不是Promise对象
    // catch方法，用来指定reject的回调
    this.test()
      .then((value) => {
        return new Promise((resolve, reject) => {
          console.log(value, "第一个then");
          resolve(value + 1);
        });
      })
      .then((value) => {
        console.log(value, "第二个then");
        return "then方法中,你也可以直接return数据而不是Promise对象";
        // return new Promise((resolve, reject) => {
        //   reject("异常");
        // });
      })
      .then((value) => {
        console.log(value, "第三个then");
      })
      .catch((reason) => {
        console.log(reason, "reason");
      });
  },
  methods: {
    test() {
      // Promise 是什么
      // 从功能上说 是异步编程的一种解决方案，
      // 从语法上说 Promise是一个构造函数
      // Promise的构造函数接收一个参数，是函数，
      // 这个函数传入两个参数：resolve(异步操作执行成功后的回调函数)，reject(异步操作执行失败后的回调函数)
      let p = new Promise((resolve, reject) => {
        var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
        if (num <= 5) {
          resolve(num);
        } else {
          reject("数字太大了");
        }
      });
      return p;
    },
  },
};
</script>
<style scoped>
</style>