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
    this.test();
  },
  methods: {
    test() {
      new Promise((resolve, reject) => {
        resolve("1");
      })
        .then((value) => {
          console.log(value, "第一个then"); //1
          // return undefined 默认返回undefined
        })
        .then((value) => {
          console.log(value, "第二个then"); //undefined
          return "3";
        })
        .then((value) => {
          console.log(value, "第三个then"); //2
          return new Promise((resolve, reject) => {
            resolve("4");
          });
        })
        .then((value) => {
          console.log(value, "第四个then"); //2
          throw "错误的";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
</style>