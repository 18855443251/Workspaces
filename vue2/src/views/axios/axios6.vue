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
      // 添加请求拦截器
      instance.interceptors.request.use(
        function (config) {
          console.log(config, "config");
          // 在发送请求之前做些什么
          return config;
        },
        function (error) {
          console.log("请求错误");
          // 对请求错误做些什么
          return Promise.reject(error);
        }
      );
      // 添加响应拦截器
      instance.interceptors.response.use(
        function (response) {
          // 2xx 范围内的状态码都会触发该函数。
          // 对响应数据做点什么
          console.log(response, "response");
          return response.data;
        },
        function (error) {
          console.log(error.response, "响应错误");
          // 超出 2xx 范围的状态码都会触发该函数。
          // 对响应错误做点什么
          return Promise.reject(error);
        }
      );
      // 第二种方法 两种方法等价
      instance
        .get("posts")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error, "error");
        });
    },
  },
};
</script>

<style scoped></style>
