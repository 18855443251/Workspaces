<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2021-08-25 16:07:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\login.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {};
  },
  created() {
    // 14、编码和解码
    var a = "http://w3cschool.cc/my test.asp?name=stare&car=saab";
    var b = encodeURIComponent(a); //"http%3A%2F%2Fw3cschool.cc%2Fmy%20test.asp%3Fname%3Dstare%26car%3Dsaab"
    var c = decodeURIComponent(b); //"http://w3cschool.cc/my test.asp?name=stare&car=saab"
    console.log(b);
  },
  methods: {},
};
</script>
<style scoped>
</style>