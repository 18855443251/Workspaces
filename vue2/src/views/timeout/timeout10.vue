<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
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
    // 1 7 2 3 8 4 6 5 0
    setTimeout(() => {
      console.log("0");
    }, 0);

    new Promise((resolve, reject) => {
      console.log("1");
      resolve();
    })
      .then(() => {
        console.log("2");
        new Promise((resolve, reject) => {
          console.log("3");
          resolve();
        })
          .then(() => {
            console.log("4");
          })
          .then(() => {
            console.log("5");
          });
      })
      .then(() => {
        console.log("6");
      });
    new Promise((resolve, reject) => {
      console.log("7");
      resolve();
    }).then(() => {
      console.log("8");
    });
  },
  methods: {},
};
</script>
<style scoped></style>
