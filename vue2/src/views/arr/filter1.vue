<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // this.test1();
    // this.test2();
    // this.test3();
    // this.test4();
    // this.test5();
    // this.test6();
    this.test8();
  },
  methods: {
    // every不会改变原数组
    // 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再执行检测。
    // 如果所有元素都满足条件，则返回 true。
    test1() {
      var arr = [1, 2, 3, 4, 5];
      var result = arr.every((element) => {
        console.log("val：" + element); //打印1 2 3 4 5
        return element > 0; // 检查每个元素是否大于 0
      });
      console.log(result); //true
    },
    test2() {
      var arr = [{ age: 4 }, { age: 1 }, { age: 8 }];
      var result = arr.every((element) => {
        console.log("val：" + element.age); //打印4 1不会打印8
        return element.age > 2; // 检查每个元素是否大于 2
      });
      console.log(result); //false
    },
    // some如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
    // some
    test3() {
      var arr = [1, 2, 3, 4, 5, 6];
      var some = arr.some((val, index, arr) => {
        console.log("val：" + val); //打印1、2、3、4、5，不会打印6
        return val > 4;
      });
      console.log(some); //返回true
    },
    // 数组filter方法筛选不会对空数组进行检测，不会改变原始数组
    // 不满足条件返回空数组
    test4() {
      var arr = [1, 2, 3, 4, 5, 6, 2];
      var result = arr.filter((val, index, arr) => {
        console.log("val：" + val); //打印1、2、3、4、5、6、2
        return val > 4;
      });
      console.log(result); // [5, 6]
    },
    test5() {
      var arr = [{ age: 4 }, { age: 1 }, { age: 8 }, { age: 18 }];
      var result = arr.filter((item, index, arr) => {
        console.log("item" + item); //打印1、2、3、4、5、6、2
        return item.age > 4;
      });
      console.log(JSON.stringify(result)); //[{"age":8},{"age":18}]
    },
    test6() {
      var arr = [{ age: 14 }, { age: 1 }, { age: 8 }, { age: 18 }];
      var newarr = [{ age: 4 }, { age: 12 }, { age: 28 }, { age: 18 }];
      console.log(this.test7(arr, newarr)); //true
    },
    test7(arr, newarr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < newarr.length; j++) {
          if (arr[i].age == newarr[j].age) {
            console.log("进来了");
            return true;
          }
        }
      }
      // 都不满足
      return false;
    },
    test8() {
      // name未定义
      var arr = [
        { flag: true, age: "66" },
        { age: false },
        { flag: false, age: "63" },
      ];
      var result = arr.filter((item, index, arr) => {
        console.log(item,'哈哈')
        return item.name;
      });
      console.log(result); // []
    },
  },
};
</script>

<style scoped></style>
