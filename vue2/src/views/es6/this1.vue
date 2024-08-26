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
    // ES6中的 箭头函数 "=>" 内部的this是词法作用域，由上下文确定（也就是由外层调用者vue来确定）。
    // bind(this)来改变匿名函数的this指向
    // hack写法 var _this= this; ：
    var that = this;
    this.zhuTest("测试", function (data) {
      console.log(that);
      that.msg = data;
    });
  },
  methods: {
    zhuTest(msg, callback) {
      callback && callback(msg);
    },
  },
};
</script>
<style scoped>
</style>