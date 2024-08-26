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
      let obj = {
        firstName: "Bill",
        add: function () {
          console.log(this, "add"); // 指向obj对象
          setTimeout(function () {
            console.log(this, "setTimeout"); //指向window
          }, 0);
          //而箭头函数中的this他是指向的最近作用域的对象，也就是说最近调用它的对象
          setTimeout(() => {
            console.log(this, "setTimeout1"); //指向obj
          }, 0);
        },
        sub: () => {
          console.log(this, "sub"); //vue实例
        },
      };
      // 普通函数谁调用它就指向谁
      obj.add();
      obj.sub();
    },
  },
};
</script>
<style scoped></style>
