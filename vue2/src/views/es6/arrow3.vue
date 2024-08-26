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
    <div>let</div>
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
    let test = function (name) {
      return {
        name: name,
      };
    };
    console.log(test("张三"));
    let test1 = (name) => ({ name });
    console.log(test1("李四"));
  },
  methods: {},
};
</script>

<style scoped></style>
