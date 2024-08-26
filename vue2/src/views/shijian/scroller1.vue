    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-19 14:51:55
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
    window.addEventListener("scroll", this.test);
  },
  methods: {
    // iphoneX  375*812 scroll属性作用在body
    test() {
      console.log(document.documentElement.scrollWidth + "宽"); //500
      console.log(document.documentElement.scrollHeight + "高"); //950
      console.log(document.documentElement.scrollTop + "顶部"); //138=950-812滚动条滑到最底下
      console.log(document.documentElement.scrollLeft + "左边"); //125=500-375滚动条滑到最右边
    },
  },
};
</script>

<style scoped>
#card {
  width: 1000px;
  height: 1900px;
}
#son {
  width: 100px;
  height: 50px;
  background: rgb(96, 201, 54);
}
</style>
