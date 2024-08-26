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
    // 执行任务1异步  任务1的结果 1 执行任务2同步 任务2的结果 2 执行任务3异步 任务3的结果 3 执行任务4同步 任务4的结果 4
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("执行任务1异步");
        resolve(1);
      }, 100);
    })
      .then((value) => {
        console.log("任务1的结果", value);
        console.log("执行任务2同步");
        return 2;
      })
      .then((value) => {
        console.log("任务2的结果", value);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("执行任务3异步");
            // resolve(3);
            reject(3);//终端promise 后面的then不会执行
          }, 100);
        });
      })
      .then((value) => {
        console.log("任务3的结果", value);
        console.log("执行任务4同步");
        return 4;
      })
      .then((value) => {
        console.log("任务4的结果", value);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
};
</script>
<style scoped></style>
