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
    return {
      obj1: {
        name: "张三",
        age: "26",
        language: [1, [2, 3], [4, 5]],
        test(val){
          return val
        },
        info:{
          date:new Date(),
          sex:"女"
        }
      },
    };
  },
  // 深拷贝
  created() {
    this.test1();
    // this.test2();
    // this.test3();
  },
  methods: {
    test1() {
      var obj3 = JSON.parse(JSON.stringify(this.obj1));
      obj3.name = "李四";
      obj3.language[1] = ["二", "三"];
       obj3.sex = '男';
      console.log("obj1", this.obj1);//原对象不会改变
    },
    test2() {
      const originObj = {
        name: "haha",
        sayHello: function () {
          console.log("Hello haha");
        },
      };
      console.log(originObj); // {name: "haha", sayHello: ƒ}
      const cloneObj = JSON.parse(JSON.stringify(originObj));
      // 因为使用JSON.parse/stringify在遇到函数、undefined、Symbol、正则等时会丢失，
      // 所以当遇到要复制的对象中包含函数的时候，就不能使用JSON.parse/stringify进行深拷贝了
      console.log(cloneObj); // {name: "haha"}
    },

    test3() {
      const originObj = {
        name: "axuebin",
        sayHello: function () {
          console.log("Hello World");
        },
      };
      console.log(originObj); // {name: "axuebin", sayHello: ƒ}
      // 利用递归来实现每一层都重新创建对象并赋值
      const cloneObj = this.deepClone(originObj);
      console.log(cloneObj); // {name: "axuebin", sayHello: ƒ}
    },
    // 利用递归来实现每一层都重新创建对象并赋值
    deepClone(source) {
      const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
      for (let keys in source) {
        // 遍历目标
        if (source.hasOwnProperty(keys)) {
          if (source[keys] && typeof source[keys] === "object") {
            // 如果值是对象，就递归一下
            targetObj[keys] = source[keys].constructor === Array ? [] : {};
            targetObj[keys] = deepClone(source[keys]);
          } else {
            // 如果不是，就直接赋值
            targetObj[keys] = source[keys];
          }
        }
      }
      return targetObj;
    },
  },
};
</script>
<style scoped>
</style>