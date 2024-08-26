<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-12 10:58:29
 * @LastEditors: Please set LastEditors
 * @Description: 发接口方式
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div @click="test">发送get请求</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {
    async test() {
      let a = await axios({
        url: "http://localhost:3000/posts",
        method: "get",
      });
      console.log(a, "刚刚"); //返回的是一个promise对象
    },
  },
};
</script>

<style scoped></style>
