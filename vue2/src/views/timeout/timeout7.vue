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
    console.log("1");
    this.getData();
    console.log("2");
  },
  methods: {
    // 13425678
    async getData() {
      console.log("3");
      let r1 = await new Promise((resolve) => {
        console.log("4");
        resolve("5");
      });
      console.log(r1);
      let r2 = await new Promise((resolve) => {
        console.log("6");
        resolve("7");
      });
      console.log(r2);
      console.log("8");
    },
  },
};
</script>
<style scoped></style>
