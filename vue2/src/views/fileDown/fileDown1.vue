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
    <div @click="downloadFile" class="downloadExcel">下载excel文件</div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
// import FileSaver from 'file-saver'
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
    downloadFile() {
      const a = document.createElement("a");
      a.href = "/templates/participant-template.xlsx";
      a.setAttribute("download", "测试");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>
<style scoped></style>

