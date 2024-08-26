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
    test() {
      // axios的默认配置
      axios.defaults.baseURL = "http://localhost:3000/process";
      axios.defaults.method = "post";
      axios.defaults.timeout = "3000";
      axios({
        url: "posts",
        data: { title: "赵六", views: "300" },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped></style>
