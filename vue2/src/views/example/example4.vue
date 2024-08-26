<template>
  <div>
    <div @click="downloadAttachment">doc,excel,pdf,txt,png</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    // window.open() 方法是用来打开新浏览器窗口或标签页的 JavaScript 方法
    return {
      newwang: "http://10.23.50.18:7770/",
      waiwang: "http://192.168.52.151:7770/",
    };
  },
  created() {},
  methods: {
    // pc端下载docx
    downloadAttachment(val) {
      console.log(val, "好好");
      // val = {
      //   adjustFileName: "江西农商行笔记.docx",
      //   adjustFileUrl: "江西农商行笔记.docx",
      // };
      // val = {
      //   adjustFileName: "判断.txt",
      //   adjustFileUrl: "判断.txt",
      // };
      val = {
        adjustFileName: "16994079852361638512954992merchantTest.cer",
        adjustFileUrl: "16994079852361638512954992merchantTest.cer",
      };
      if (val.adjustFileName && val.adjustFileName.indexOf(".txt") > 0) {
        const element = document.createElement("a");
        element.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," +
            encodeURIComponent(val.adjustFileUrl)
        );
        element.setAttribute("download", val.adjustFileName);
        element.style.display = "none";
        element.click();


          // let a = document.createElement("a");
          //         a.href = info.filePath + "/" + info.fileName;
          //         a.download = info.fileName;
          //         a.click();
      } else {
        window.open(this.newwang + val.adjustFileUrl);
      }
    },
    test() {
      // window.open(
      //   this.newwang + "网点.pdf",
      //   "MyWindowName",
      //   "width=600,height=400"
      // );
    },
  },
};
</script>

<style scoped></style>
