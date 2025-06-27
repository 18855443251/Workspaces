<template>
  <div>
    <div v-html="markMessage(content)"></div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  name: "home",
  data() {
    return {
      content: "测试\n换行**加粗**",
    };
  },
  mounted() {},
  methods: {
    markMessage(content) {
      let message = content.replaceAll("\\n", "\n");
      marked.setOptions({
        breaks: true, // 转换换行符为 <br>
        sanitize: false,
      });
      console.log(marked(message),'消息');
      return marked(message);
    },
  },
};
</script>

<style scoped>
</style>
