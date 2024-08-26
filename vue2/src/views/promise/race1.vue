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
    console.log(a1)
    let a2 = this.test2();
    let a3 = this.test3();
    // race方法「谁跑的快，以谁为准执行回调
    // race接收一个数组参数，里面的值最终都算返回Promise对象
    // raace会把所有异步操作的结果放进一个数组中传给then，就是下面的results
    let c=Promise.race([a1, a2, a3])
    Promise.race([a1, a2, a3])
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // 于是他俩就会赛跑，如果5秒之内图片请求成功了，那么遍进入then方法，执行正常的流程。如果5秒钟图片还未成功返回，那么timeout就跑赢了，则进入catch，报出“图片请求超时”的信息。
    // Promise.race([this.requestImg(), this.timeout()])
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch((reason) => {
    //     console.log(reason);
    //   });
  },
  methods: {
    test1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("1");
        }, 1000);
      });
    },
    test2() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("2");
        }, 500);
      });
    },
    test3() {
      return Promise.reject("失败");
    },
    //请求某个图片资源
    requestImg() {
      var p = new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function () {
          resolve(img);
        };
        img.src = "xxxxxx";
      });
      return p;
    },

    //延时函数，用于给请求计时
    timeout() {
      var p = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("图片请求超时");
        }, 5000);
      });
      return p;
    },
  },
};
</script>
<style scoped>
</style>