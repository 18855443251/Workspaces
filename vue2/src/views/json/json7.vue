<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-30 10:47:02
 * @LastEditors: Please set LastEditors
 * @Description: json导入
 * @FilePath: \vueDemo\src\views\json\json1.vue
-->
<template>
  <div>
    <div>{{ name}}</div>
    <div>{{ name.changeText(' 哈哈') }}</div>
    <div>{{age}}</div>
  </div>
</template>

<script>
import name from "./js/exportDefault/test1.js";
import object2 from "./js/exportDefault/object2.js";
export default {
  name: "home",
  data() {
    return {
      name,
      age:''
    };
  },
  created() {
    this.age = object2();
  },

  methods: {},
};
</script>

<style scoped></style>
