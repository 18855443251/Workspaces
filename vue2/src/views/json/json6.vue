<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-30 10:47:02
 * @LastEditors: Please set LastEditors
 * @Description: json导入
 * @FilePath: \vueDemo\src\views\json\json1.vue
-->
<template>
  <div>
    <div>{{ str1 }}</div>
    <div>{{ year1 }}</div>
  </div>
</template>

<script>
import { str1, year1,message1 } from "./js/config2.js";

export default {
  name: "home",
  data() {
    return {
      str1,
      year1,
    };
  },
  created() {
    console.log(message1("消息"));
  },
  methods: {},
};
</script>

<style scoped></style>
