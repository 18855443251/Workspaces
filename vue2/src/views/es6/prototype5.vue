<template>
  <div class="claneCache_view">原型链</div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    // constructor 原型对象prototype和对象原型__proto__里面都有
    // prototype 构造函数才有
    // __proto__ 实例对象才有
    function Star(uname) {
      this.uname = uname;
    }
    const ldh = new Star("刘德华");
    // 对象原型里面有constructor 指向 构造函数 Star
    console.log(Star.prototype.constructor == Star);
    console.log(ldh.__proto__.constructor == Star);
    //  对象原型__proto__ 指向  构造函数的原型对象
    console.log(ldh.__proto__ == Star.prototype);
  },
  methods: {
    test() {
      function Star(name) {
        this.name = name;
      }
      var ldh = new Star("张三");
      console.log(ldh.__proto__.__proto__ === Object.prototype); //true
      console.log(Star.prototype.__proto__ === Object.prototype); //true
      console.log(Object.getPrototypeOf(ldh) === Star.prototype); // true
    },
  },
};
</script>
<style scoped>
</style>