
<template>
  <div class="page">
     <!-- this指向 -->
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
    this.query();
    this.query1();
  },
  methods: {
    query() {
      let count = 0;
      let f = function () {
        console.log(this,count); //undefined 0
      };
      f();
    },
    query1() {
      // 其实箭头函数这里的this是指外层函数的this，因为箭头函数是没有定义this，
      // 当在箭头函数内部用到this后会从他的父级作用域寻找。他父级就是query（）函数，
      // 在这函数里使用this是指向当前组件的，所以这个直接在这函数里定义的箭头函数也是如此。
      let count = 0;
      let arrow = () => {
        console.log(count,this); // 0 VueComponent
      };
      arrow();
    },
  },
};
</script>
<style scoped>
</style>