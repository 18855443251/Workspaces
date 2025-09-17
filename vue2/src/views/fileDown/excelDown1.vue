<template>
  <div class="claneCache_view">
    <input
      ref="excel-upload-input"
      class="excel-upload-input"
      type="file"
      @change="uploadChange"
    />
    <img :src="imgUrl" alt="" />
    <!-- accept=".xlsx, .xls" -->
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
      imgUrl: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    uploadChange(event) {
      const file = event.target.files[0];
      //  const file = this.$refs['excel-upload-input'].files[0];
      this.imgUrl = URL.createObjectURL(file); // 创建的是指向文件在内存中副本的URL
      console.log(file, this.imgUrl, "火狐");
    },
    test() {
      // result是二进制流
      FileSaver.saveAs(result, "员工信息表.xlsx"); // 下载文件
    },
  },
};
</script>
<style scoped></style>

