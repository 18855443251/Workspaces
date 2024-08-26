<template>
  <div class="claneCache_view">
    原型链instanceof是用来判断 A 是否为 B 的实例
  </div>
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
    test() {
      console.log(Object.prototype);
      console.log(Object.prototype.__proto__); //null
      function Person() {}
      const ldh = new Person();
      console.log(ldh.__proto__ === Person.prototype); //true
      console.log(Person.prototype.__proto__ === Object.prototype); //true
      console.log(ldh instanceof Person); //true
      console.log(ldh instanceof Object); //true
      console.log(ldh instanceof Array); //false
      console.log([1, 2, 3] instanceof Array); //true
      console.log(Array instanceof Object); //true
    },
    test1() {
      // 万物皆对象
      function Person() {}
      console.log(Person.prototype);
      console.log(function Person() {});
      console.log([] instanceof Array); //true
      console.log({} instanceof Object); //true
      console.log(new Date() instanceof Date); //true
      console.log(new Person() instanceof Person); //true
      console.log([] instanceof Object); //true
      console.log(new Date() instanceof Object); //true
      console.log(new Person() instanceof Object); //true
      console.log(Object.prototype.toString.call(null));
      console.log(Object.prototype.toString.call([]));
      console.log(Array.isArray([])); //true
    },
    test2() {
      // 构造函数
      function Person(name) {
        // this.指向实例对象
        console.log(this instanceof Person);
        if (this instanceof Person) {
          this.lastName = name;
        } else {
          return new Person(name);
        }
      }
      // var x = new Person("张三");
      var y = Person("李四");
      // console.log(x); //实例对象
      // console.log(y); //实例对象
    },
  },
};
</script>
<style scoped>
</style>