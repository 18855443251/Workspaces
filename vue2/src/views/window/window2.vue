
<template>
  <div class="claneCache_view">
    <div>获取参数</div>
    <div>{{ shopFlag }}</div>
    <div>{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      shopFlag: "",
      name: "",
    };
  },
  created() {
    // 截取哈希部分参数
    //  window.location.href = "http://localhost:8080/#/window2?shopFlag=测试";
    const hashContent = window.location.hash.substring(1); // 得到 '/window2?shopFlag=测试'
    const [path, queryStr] = hashContent.split("?");
    const params = new URLSearchParams(queryStr || "");
    this.shopFlag = params.get("shopFlag"); // 需手动解码中文
    // console.log(decodeURIComponent(this.shopFlag)); // 输出"测试"

    // http://135.127.33.197:58106/khNotification?sign=%E2%80%98%E5%89%8D%E9%9D%A2%E2%80%99
    // window.location.search 会得到?sign=%E2%80%98%E5%89%8D%E9%9D%A2%E2%80%99
    console.log(
      new URLSearchParams("?sign=%E2%80%98%E5%89%8D%E9%9D%A2%E2%80%99").get(
        "sign"
      )
    );
  },
  methods: {},
};
</script>
<style scoped>
</style>