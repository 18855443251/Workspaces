<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-23 11:05:57
 * @LastEditors: Please set LastEditors
 * @Description:scroller
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card"></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      // navigator.appVersion;
      // '5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      // navigator.cookieEnabled
      // true
      // navigator.platform
      // 'Win32'
      // navigator.language
      // 'zh-CN'
      // navigator.appName
      // 'Netscape'
      let userAgent = navigator.userAgent;
      console.log(userAgent);
      if (/firefox/i.test(userAgent)) {
        console.log("火狐");
      } else if (/chrome/i.test(userAgent)) {
        console.log("谷歌");
      } else if (/msie/i.test(userAgent)) {
        console.log("ie");
      }
    },
  },
};
</script>

<style scoped>
#son {
  width: 100px;
  height: 50px;
  background: rgb(77, 192, 221);
}
</style>
