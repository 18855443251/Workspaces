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
    this.test();
  },
  methods: {
    test() {
      const entries = [
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ];

      const obj = Object.fromEntries(entries);
      console.log(obj);
      // 输出: { a: 1, b: 2, c: 3 }
    },
  },
};
</script>

<style scoped></style>
