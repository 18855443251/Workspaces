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
  async created() {
    let a1 = await this.test1();
    let a2 = await this.test2(a1);
    let a3 = await this.test3(a2);
    console.log(a3);
  },
  methods: {
    test1() {
      return new Promise((resolve, reject) => {
        resolve(1);
      });
    },
    test2(value) {
      return new Promise((resolve, reject) => {
        resolve(value + 1);
      });
    },
    test3(value) {
      return new Promise((resolve, reject) => {
        resolve(value + 1);
      });
    },
  },
};
</script>
<style scoped>
</style>