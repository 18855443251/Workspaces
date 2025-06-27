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
    <!-- 函数形式 -->
    <div @click="test">跨域</div>
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
    test() {
      let a = axios({
        url: "http://127.0.0.1:8889/students",
        method: "get",
        headers:{
            userId:'55012'
        }
      });
      a.then((res) => {
        console.log(res.headers, "和");
      });
    },
  },
};
</script>

<style scoped></style>
