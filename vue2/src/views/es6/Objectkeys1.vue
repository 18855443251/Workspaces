<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:05
 * @LastEditors: Please set LastEditors
 * @Description: Object.assign合并对象
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    test6() {
      // 处理对象，返回可枚举的属性数组
      let person = {
        name: "张三",
        age: 25,
        address: "深圳",
        getName: function () {},
      };
      console.log(JSON.stringify(Object.keys(person))); //["name","age","address","getName"]
    },
    test7() {
      //处理数组，返回索引值数组
      let arr = [1, 2, 3, 4];
      console.log(JSON.stringify(Object.keys(arr))); //["0","1","2","3"]
    },
    test8() {
      //处理字符串，返回索引值数组
      let str = "hello你";
      console.log(JSON.stringify(Object.keys(str))); //["0","1","2","3","4","5"]
    },
    test9() {
      let obj = {
        foo: "张三",
        baz: 20,
      };
      console.log(JSON.stringify(Object.values(obj))); //["张三",20]
    },
    test10() {
      let refsList = [
        { age: 30, name: "业务早报", isNew: true },
        { age: 60, name: "机构存贷款", isNew: false },
      ];
      let newArr = Object.keys(refsList).filter((item, index) => {
        return refsList[item].isNew == true;
      });
      console.log(JSON.stringify(newArr)); //["business"]
    },
  },
};
</script>

<style scoped></style>
