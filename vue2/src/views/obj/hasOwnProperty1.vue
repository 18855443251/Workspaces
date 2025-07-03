<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:05
 * @LastEditors: Please set LastEditors
 * @Description: Object.assign合并对象
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div>hasOwnProperty</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    // hasOwnProperty方法是JavaScript中用于检测对象是否包含自身（非继承）指定属性的方法
    // this.test();
    this.test1();
  },
  methods: {
    test() {
      const obj = { a: 1 };
      Object.prototype.b = 2;
      console.log(obj.hasOwnProperty("a")); // true（自有属性）
      console.log(obj.hasOwnProperty("b")); // false（继承属性）
      console.log(obj);
    },
    test1() {
      function Person() {
        this.name = "坤坤";
      }
      Person.prototype.age = 18; //在原型对象上添加age属性
      const person = new Person();
      console.log(person.hasOwnProperty("age")); //false
      console.log(person.hasOwnProperty("name")); //true
      person.name = "张三"; //在实例本身添加name属性
      console.log(person.hasOwnProperty("name")); //true
    },
  },
};
</script>

<style scoped></style>
