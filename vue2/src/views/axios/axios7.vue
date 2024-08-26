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
    <div>隔开</div>
    <div @click="test">取消get请求</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      cancel: null,
    };
  },
  created() {},
  methods: {
    test() {
      axios.interceptors.request.use(
        (config) => {
          console.log(typeof this.cancel,'好好')
          if (typeof this.cancel === "function") {
            this.cancel("取消请求1");
          }
          config.cancelToken = new axios.CancelToken((c) => {
            this.cancel = c;
          });
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      axios.interceptors.response.use(
        (response) => {
          console.log('response进来了')
          this.cancel = null;
          return response;
        },
        (error) => {
          if (axios.isCancel(error)) {
            console.log("请求取消的错误", error.message);
            // 中断promise链接
            return new Promise(() => {});
          } else {
            this.cancel = null;
            console.log("置为null", error.message);
            // 错误向下传递
            return Promise.reject(error);
          }
        }
      );
      axios({
        url: "http://localhost:3000/posts",
      }).then((res) => {
        console.log(res);
      }).catch((error=>{
        console.log('异常')
      }));
    },
  },
};
</script>

<style scoped></style>
