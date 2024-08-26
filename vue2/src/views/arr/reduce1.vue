<template>
  <div>
    <div>
      reduce()
      方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      // callback（一个在数组中每一项上调用的函数，接受四个函数：）
      // previousValue（上一次调用回调函数时的返回值，或者初始值）
      // currentValue（当前正在处理的数组元素）
      // currentIndex（当前正在处理的数组元素下标）
      // array（调用reduce()方法的数组）
    };
  },
  mounted() {
    // this.test();
    // this.test1();
    // this.test2();
    // this.test3();
    this.test4();
  },
  methods: {
    test() {
      var arr = [1, 2, 3, 4]; //循环三次
      let a = arr.reduce(function (pre, cur) {
        console.log(pre, cur); //1 2
        return pre + cur;
      });
      console.log(a); //10
    },
    test1() {
      var arr = [1, 2, 3]; //传入initialValue 会多递归一次
      let a = arr.reduce(function (pre, cur, index, arr) {
        // debugger;
        console.log(pre, cur); //10 1
        return pre + cur;
      }, 10);
      console.log(a);
    },
    test2() {
      var arr = [1, 2, 3];
      var pro = arr.reduce(function (pre, cur, index, arr) {
        return pre * cur;
      });
      console.log(pro); //6
    },
    test3() {
      var arr = [1, 2, 3];
      var max = arr.reduce(function (pre, cur, inde, arr) {
        return pre > cur ? pre : cur;
      });
      console.log(max);
    },
    test4() {
      var arr = [{ name: "brick11" }, { name: "brick12" }, { name: "brick13" }];
      function carryBricks(arr) {
        return arr.reduce(function (prev, current, index, array) {
          // debugger;
          console.log(prev, current);
          if (index === 0) {
            return current.name;
          } else if (index === array.length - 1) {
            return prev + " & " + current.name;
          } else {
            return prev + ", " + current.name;
          }
        }, "");
      }
      console.log(carryBricks(arr)); //brick11, brick12 & brick13
    },
  },
};
</script>
<style scoped></style>
