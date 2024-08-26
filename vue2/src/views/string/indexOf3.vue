<template>
  <div>
    <div>获取链接中的对象</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
    };
  },
  mounted() {
    let url = this.GetRequest(
      "https://essence.com.cn/web/trade-base?key1=1&key2=2&key3=3#test"
    );
    console.log(url)
  },
  methods: {
    GetRequest(url) {
      var json = {};
      var arr = url.slice(url.indexOf("?") + 1, -5).split("&");
      arr.forEach((item) => {
        var tmp = item.split("=");
        json[tmp[0]] = tmp[1];
      });
      return json;
    },
  },
};
</script>

<style scoped>

</style>
