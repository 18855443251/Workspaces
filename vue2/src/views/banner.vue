<!--
 * @Author: your name
 * @Date: 2021-05-06 20:10:09
 * @LastEditTime: 2022-02-17 11:01:28
 * @LastEditors: Please set LastEditors
 * @Description:banner
 * @FilePath: \root\glhHome\src\views\login.vue
-->
<template>
  <div></div>
</template>
<script>
export default {
  name: "Login",

  data() {
    return {
      url: "http://172.16.215.10:9090/h5/party/index.html",
      //编码encodeURIComponent  解码decodeURICompone
      a: [
        {
          componentType: "h5",
          componentUrl:
            'http://172.16.215.10:9090/h5/party/index.html?userInfo={"orgCode":"01045","userId":"17001","empid":"01180","deptcode":"01045","empname":"超凡哥哥","orgno":"01045","deptname":"常州支行","centerNo":"21104","manageOrgNo":"A0001"}&token=&url=http://172.16.215.10:9090/h5/party/index.html',
          pictureUrl: "null",
        },
        {
          componentType: "h5",
          componentUrl:
            'http://30.114.90.41:8082#/index?userInfo={"orgCode":"01045","userId":"17001","empid":"01180","deptcode":"01045","empname":"超凡哥哥","orgno":"01045","deptname":"常州支行","centerNo":"21104","manageOrgNo":"A0001"}&token=&url=http://30.114.90.41:8082#',
          pictureUrl: "null",
        },
      ],
      usedSceneList: [
        {
          componentType: "h5",
          componentUrl: "http://172.16.215.10:9090/h5/party/index.html",
        },
        {
          componentType: "h5",
          componentUrl: "http://30.114.90.41:8082#/index",
        },
      ],
    };
  },
  created() {
    var a = encodeURIComponent(url);
    var b = decodeURIComponent(a);
    console.log(a); //http%3A%2F%2F172.16.215.10%3A9090%2Fh5%2Fparty%2Findex.html
    console.log(b); //http://172.16.215.10:9090/h5/party/index.html

    this.getBanner();
  },
  methods: {
    getComponentUrl(myUrl) {
      let resolvedUrl =
        myUrl.indexOf("index.html") > -1
          ? `${encodeURIComponent(myUrl.replace("#/index", "#"))}`
          : `${encodeURIComponent(myUrl.replace("/index", ""))}`;
      return resolvedUrl;
    },
    getBanner() {
      var a = this.usedSceneList.map((item) => {
        return {
          ...item,
          componentUrl:
            item.componentUrl == "null" || !item.componentUrl
              ? "null"
              : `${item.componentUrl}${
                  item.componentUrl.indexOf("?") == -1 ? "?" : "&"
                }userInfo=${encodeURIComponent(
                  JSON.stringify(this.$store.state.userInfo)
                )}` +
                `&token=${this.token}` +
                `&url=${this.getComponentUrl(item.componentUrl)}`,
          pictureUrl:
            item.pictureUrl == "null" || !item.pictureUrl
              ? "null"
              : `${item.pictureUrl}${
                  item.pictureUrl.indexOf("?") == -1 ? "?" : "&"
                }userInfo=${encodeURIComponent(
                  JSON.stringify(this.$store.state.userInfo)
                )}` + `&token=${this.token}`,
        };
      });
      console.log(a);
    },
  },
};
</script>
<style scoped>
</style>
