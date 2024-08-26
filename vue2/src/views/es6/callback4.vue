
<template>
  <div class="claneCache_view"></div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      inputVal: "",
    };
  },
  created() {
    //     回调函数的特点：
    // 1）不会立刻执行
    // 回调函数作为参数传递给一个函数的时候，传递的只是函数的定义并不会立即执行。和普通的函数一样，回调函数在函数中调用也要通过()运算符调用才会执行。
    // 2）是个闭包
    // 回调函数是一个闭包，也就是说它能访问到其外层定义的变量。
    // 3）执行前类型判断
    // this.test1();
    // this.test2();
  },
  methods: {
    test1() {
      function processUserInput() {
        var name = "张三";
        function greeting() {
          console.log("Hello " + name);
        }
        greeting();
      }
      processUserInput();
    },
    test2() {
      function greeting(name) {
        console.log("Hello " + name);
      }
      function processUserInput(callback) {
        var name = "张三";
        callback(name);
      }
      console.log(greeting);
      processUserInput(greeting);
    },
  },
};
</script>
<style scoped></style>

