    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-25 14:37:36
 * @LastEditors: Please set LastEditors
 * @Description:client
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
      // 就是 iphoneX  375*812宽度和高度，无论滑动
      console.log(document.documentElement.clientWidth + "clientWidth"); //网页可见区域宽375
      console.log(document.documentElement.clientHeight + "clientHeight"); //网页可见区域高812
      console.log(document.documentElement.clientLeft + "clientLeft"); //border0
      console.log(document.documentElement.clientTop + "clientTop"); //border0
    },
  },
};
</script>

<style scoped>
#card {
  width: 800px;
  height: 1900px;
}
</style>
