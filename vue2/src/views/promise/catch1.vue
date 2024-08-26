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
    this.test1();
  },
  methods: {
    test() {
      // catch方法，用来指定reject的回调
      new Promise((resolve, reject) => {
        resolve("哈哈");
      })
        .then((value) => {
          console.log(value, "第一个then");
          // 如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中
          console.log(s);
          console.log("进来了");
        })
        .catch((reason) => {
          console.log(reason, "reason");
        });
      setTimeout(() => {
        console.log("时间");
      }, 100);
    },
    test1() {
      try {
        console.log("第一个then");
        console.log(s);
        console.log("进来了");
      } catch (error) {
        console.log(error, "error");
      }
      setTimeout(() => {
        console.log("时间");
      }, 100);
    },
  },
};
</script>
<style scoped>
</style>