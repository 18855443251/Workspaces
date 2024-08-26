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
    <!-- 对象形式 -->
    <div @click="test">发送get请求</div>
    <div @click="test2">发送post请求</div>
    <div @click="test3">发送put请求</div>
    <div @click="test4">发送delete请求</div>
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
      axios
        .get("http://localhost:3000/posts", {
          id: "1",
        })
        .then((res) => {
          console.log(res);
        });
    },
    test2() {
      axios
        .post("http://localhost:3000/posts", {
          id: "3",
          title: "王五",
          views: "300",
        })
        .then((res) => {
          console.log(res);
        });
    },
    test3() {
      axios
        .put("http://localhost:3000/posts/1", { title: "赵六好", views: "300" })
        .then((res) => {
          console.log(res);
        });
    },
    test4() {
      axios.delete("http://localhost:3000/posts/3").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped></style>
