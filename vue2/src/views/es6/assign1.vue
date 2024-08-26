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
  created() {
    // Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象，继承属性和不可枚举属性是不能拷贝的。
    let obj1 = {
      name: "张三",
      age: 4,
    };
    let obj2 = {
      name: "李四",
      sex: "女",
    };
    const obj3 = { a: { b: 1 } };
    // 第一个参数是目标对象，后面的参数都是源对象。
    let a = Object.assign({}, obj1);
    console.log(a, "a");
    // 没有同名的属性会直接复制到目标对象上，同名的属性后面的属性值会覆盖前面的同名属性值。
    let b = Object.assign(obj1, obj2);
    console.log(b, "b");
    // 如果只是想将两个或多个对象的属性合并到一起，不改变原有对象的属性，可以用一个空的对象作为target对象。像下面这样：
    let c = Object.assign({}, obj1, obj2);
    console.log(c, "c");
    let f = Object.assign({}, obj1, obj3);
    console.log(f, "f");
    // 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
    let d = Object.assign(
      {},
      obj1,
      obj2,
      "公共",
      2,
      undefined,
      null,
      NaN,
      false
    );
    console.log(d, "d");
    let e = Object.assign(2);
    console.log(e, "e");
  },
  methods: {},
};
</script>

<style scoped></style>
