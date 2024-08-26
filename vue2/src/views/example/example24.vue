<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // 由JSON字符串转换为JSON对象的时候可以用eval，例如：
    var json = "{name:'Mr.CAO',age:30}";
    var jsonObj = eval("(" + json + ")");
    console.log(jsonObj);
    // eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。 只接收一个参数
    console.log(eval("2 + 2"));
    console.log(eval(new String("2 + 2")));
    // Expected output: 2 + 2
    console.log(eval("2 + 2") === eval("4"));
    // Expected output: true
    console.log(eval("2 + 2") === eval(new String("2 + 2")));
  },
  methods: {},
};
</script>

<style scoped></style>
