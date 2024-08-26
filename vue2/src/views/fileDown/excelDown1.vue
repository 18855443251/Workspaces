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
    <input
      ref="excel-upload-input"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="uploadChange"
    />
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
    test() {
      // result是二进制流
      FileSaver.saveAs(result, "员工信息表.xlsx"); // 下载文件
    },
  },
};
</script>
<style scoped></style>

