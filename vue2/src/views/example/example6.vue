<template>
  <div>
    <input type="file" id="F" @change="change" />
    <div @click="test">预览本地文件</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      fileUrl: "",
      pictureURL: "",
    };
  },
  mounted() {},
  methods: {
    change(event) {
      let file = event.target.files[0];
      this.fileUrl = URL.createObjectURL(file);
    //   当fileUrl不需要时，可以用URL.revokeObjectURL(fileUrl)来删除浏览器对fileUrl的引用
    },
    test() {
      //   window.open('blob:http://localhost:8091/0ba51ba6-b09f-4bbc-bc9f-db346a0134ce');
      window.open(this.fileUrl);
    },
  },
};
</script>

<style scoped></style>
