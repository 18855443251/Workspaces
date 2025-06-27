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
    const promise1 = Promise.resolve(3); //返回一个Promise对象，状态为resolved，值为3
    const promise2 = 42; //返回一个普通值，42
    const promise3 = new Promise((resolve, reject) => {
      resolve("呆呆");
    }); //返回一个Promise对象，状态为resolved，值为"呆呆"
    promise3.then((value) => {
      console.log(value);
    });
    Promise.all([promise1, promise2, promise3]).then((values) => {
      console.log(values); //[3, 42, '呆呆']
    });
    const p = Promise.all([1, 2, 3]);
    p.then((values) => {
      console.log(values, "好好"); //[1, 2, 3]
    });
  },
  methods: {},
};
</script>
<style scoped>
</style>