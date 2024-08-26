    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-25 14:58:34
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div id="box" ref="box"></div>
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
    // window.addEventListener("scroll", this.test);
  },
  methods: {
    // iphoneX  375*812 clientWidth不包含border clientLeft是border的值，border没有就是0
    test() {
      console.log(this.$refs.box.clientWidth, "clientWidth"); //内容94=宽度100-border7
      console.log(this.$refs.box.clientHeight, "clientHeight"); //94=高度100-border7
      console.log(this.$refs.box.clientLeft, "clientLeft"); //3一边border,就是border值,border没有就是0
      console.log(this.$refs.box.clientTop, "clientTop"); //3边border,就是border值，border没有就是0
    },
  },
};
</script>

<style scoped>
#box {
  width: 200px;
  height: 200px;
  padding: 20 10px;
  border: 7px solid rgb(42, 38, 38);
  background-color: rgb(248, 250, 114);
  margin: 50px;
}

#card {
  width: 600px;
  height: 1200px;
  background: rgb(168, 168, 219);
}
</style>
