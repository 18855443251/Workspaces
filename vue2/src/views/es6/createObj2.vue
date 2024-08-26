<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    this.test1();
  },
  methods: {
    test1() {
      //构造函数 ：是一种特殊的函数，主要用来初始化对象
      //构造函数是来快速创建多个类似的对象 大写字母开头的函数
      //实例对象(person1)的属性和方法即为实例成员
      //构造函数(Pig)的属性和方法被称为静态成员
      function Pig(usename, age) {
        console.log(this); //this指向空对象，也就是实例对象
        this.usename = usename;
        this.age = age;
      }
      //静态属性
      Pig.password = "123";
      // 静态方法
      Pig.sayNo = function () {
        console.log("sayNo");
      };
      console.log(Pig.prototype, "HH");
      const person1 = new Pig("张三");
      // 实例属性
      person1.sex = "男";
      // 实例方法
      person1.sayHi = function () {
        console.log("sayHi");
      };
      const person2 = new Pig("李四", 30);
      console.log(person1, "person1");
      console.log(person2, "person2");
      console.log(person1 == person2); //false
    },
  },
};
</script>
<style scoped>
</style>