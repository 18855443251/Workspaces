<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:05
 * @LastEditors: Please set LastEditors
 * @Description: Object.assign合并对象
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div>entries1</div>
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
    // this.test2();
    this.test3();
  },
  methods: {
    test() {
      const obj = { x: 10, y: 20, z: 30 };

      for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
      }
      // 输出:
      // x: 10
      // y: 20
      // z: 30
    },
    test1() {
      const obj = { a: 1, b: 2, c: 3 };
      const entries = Object.entries(obj);
      console.log(entries);
      // 输出: [['a', 1], ['b', 2], ['c', 3]]
    },
    test2() {
      const obj = { a: 1, b: 2, c: 3, d: 4 };
      const filteredEntries = Object.entries(obj).filter(
        ([key, value]) => value > 2
      );
      console.log(filteredEntries);
      // 输出: [['c', 3], ['d', 4]]
    },
    test3() {
      const params = { name: "Alice", age: 25, city: "Wonderland" };
      const queryString = Object.entries(params)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");
      console.log(queryString);
      // 输出: 'name=Alice&age=25&city=Wonderland'
    },
  },
};
</script>

<style scoped></style>
