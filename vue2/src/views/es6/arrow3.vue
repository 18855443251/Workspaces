<template>
  <div>
    <div>箭头函数</div>
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
    // this.test();
    // this.test1();
    this.test2();
  },
  methods: {
    test() {
      let test = function (name) {
        return {
          name: name,
        };
      };
      console.log(test("张三"));
      let test1 = (name) => ({ name });
      console.log(test1("李四"));
    },
    test1() {
      const full = ({ first, last }) => first + " " + last;
      console.log(full({ first: "张", last: "三" }));
      // 等同于
      // function full(person) {
      //   return person.first + " " + person.last;
      // }
    },
    test2() {
      var a=[1, 2, 3].map(function (x) {
        return x * x;
      });
      console.log(a)
      // // 箭头函数写法
      // [1, 2, 3].map((x) => x * x);
    },
  },
};
</script>

<style scoped></style>
