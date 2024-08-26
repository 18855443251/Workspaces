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
    async uploadChange(event) {
      console.log(event.target.files);
      // 调用上传接口
      // uploadExcel() // 参数  form-data 需要文件file
      const files = event.target.files; // input的文件列表
      if (files.length > 0) {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append("file", file);
        });
        axios
          .post("/DocSystem/SearchD/uploadInvolvedFile.do", formData, {
            "Content-type": "multipart/form-data",
          })
          .then((res) => {
            if (res.returnCode != 200) {
              this.$notification.error({
                message: "上传错误",
                description: `文件上传失败!!!`,
              });
              return;
            } else {
              this.filePath = res.url;
              this.$notification.success({
                message: "上传成功",
                description: `文件上传成功！`,
              });
            }
          })
          .catch((error) => {
            this.$notification.error({
              message: "上传错误",
              description: `文件上传失败!!!`,
            });
          });
      }
    },
  },
};
</script>
<style scoped></style>

