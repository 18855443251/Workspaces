<template>
  <div>
    <!-- pc只会预览pdf  xlsx docx会被下载-->
    <iframe :src="contractUrl2" width="100%" height="600px" ref="iframe" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // http://192.168.52.151:7770  ipv4地址 电脑地址
      // contractUrl2: "http://192.168.52.151:7770/网点.pdf",
      contractUrl2: "http://192.168.52.151:7770/1605767318980.pdf",
      // contractUrl2:
      //   "http://192.168.52.151:7770/互金平台项目.xlsx",
      // contractUrl2:
      //   "http://192.168.52.151:7770/江西农商行笔记.docx",
    };
  },
  methods: {
  },
};
</script>

<style scoped></style>
