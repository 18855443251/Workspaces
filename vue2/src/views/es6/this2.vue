<!--
 * @Author: your name
 * @Date: 2022-06-29 10:49:00
 * @LastEditTime: 2022-06-29 10:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\callback\callback1.vue
-->
<template>
  <div class="page">
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.zhuTest();
  },
  methods: {
    zhuTest() {
        // var that = this;//定义一个引用变量
        setTimeout(function () {
          console.log(this);//指向window
        },0);
        setTimeout(() => {
          console.log(this);//指向VueComponent
        },0);
      }
  },
};
</script>
<style scoped>
</style>