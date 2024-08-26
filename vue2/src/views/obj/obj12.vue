<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>通过函数构造器来调用函数</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      // 构造函数
      function Person(arg1, arg2) {
        console.log(this)//对象实例
        this.firstName = arg1;
        this.lastName = arg2;
      }
      //构造器调用会创建新对象。新对象会从其构造器继承属性和方法。
      //构造器内的 this 关键词没有值。
      //this 的值会成为调用函数时创建的新对象。
      var x = new Person("张三", "李四");
      console.log(x.firstName); //张三
    },
  },
};
</script>
<style scoped></style>
