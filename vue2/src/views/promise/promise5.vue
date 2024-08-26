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
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      new Promise((resolve, reject) => {
        console.log(1);
        resolve({
          name: "第1个传递的值",
        });
      })
        .then((result) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(2, result);
              resolve({
                name: "第2个传递的值",
              });
            }, 1000);
          });
        })
        .then((result) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(3, result);
              resolve({
                name: "第3个传递的值",
              });
            }, 1000);
          });
        })
        .then((result) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(4, result);
              resolve({
                name: "第4个传递的值",
              });
            }, 1000);
          });
        })
        .then((result) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(5, result);
            }, 1000);
          });
        });
    },
  },
};
</script>
<style scoped></style>
