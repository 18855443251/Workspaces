<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div @click="test">记事本下载</div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      inputVal: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    test() {
      // 创建一个Blob对象
      var data = "Hello, World!";
      var blob = new Blob([data], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob); // 为文件流构建下载链接
      const a = document.createElement("a");
      a.href = url;

      a.setAttribute("download", "hh.txt");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // 使用window.navigator.msSaveBlob保存Blob对象为本地文件
      if (window.navigator && window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, "example.txt");
      }
    },
  },
};
</script>
<style scoped></style>

