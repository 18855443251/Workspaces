    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-19 14:48:02
 * @LastEditors: Please set LastEditors
 * @Description:scroller
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div id="son">儿子</div>
  </div>
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
    btn() {
      console.log(document.compatMode); //CSS1Compat
    },
    test() {
      // iphoneX  375*812
      console.log(document.documentElement.scrollWidth + "宽"); //375 网页全文正文宽就是app宽度，根据手机宽度改变,如果设置的宽度大于app手机宽度，那么选择设置的
      console.log(document.documentElement.scrollHeight + "高"); //812 网页全文正文高，看给不给全文的宽度和高度
      console.log(document.documentElement.scrollTop + "顶部"); //网页被卷去的高0
      console.log(document.documentElement.scrollLeft + "左边"); //网页被卷去的左0
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
