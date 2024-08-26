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
    <div @click="test">发送post请求</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      baseURL: "",
    };
  },
  created() {},
  methods: {
    // 使用自定义配置新建一个实例。
    test() {
      const instance = axios.create({
        baseURL: "http://localhost:3000/",
        timeout: "3000",
      });
      //   第一种方法
      //   instance({
      //     url: "posts",
      //   }).then((res) => {
      //     console.log(res);
      //   });
      // 第二种方法 两种方法等价
      instance
        .get("posts")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
