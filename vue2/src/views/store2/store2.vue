    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-11 14:06:49
 * @LastEditors: Please set LastEditors
 * @Description:对象调用
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <p>{{ name }}</p>
    <!-- <p>{{ name1 }}</p> -->
    <p>{{ age }}</p>
    <p>{{ cityObj.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  computed: {
    // age() {
    //   return this.$store.getters.age;
    // },
    // name() {
    //   return this.$store.getters.name;
    // },
    // cityObj() {
    //   return this.$store.getters.cityObj;
    // },
    // 如果一个变量或对象需要在多个页面和组件中使用，那么，可以使用mapGetters。
    //  使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(["age", "name", "cityObj"]),
    // ...mapGetters({
    //   name1:'age'
    // }),
  },
  // computed:mapGetters(["age", "name",'cityObj']),
  methods: {
    add() {},
    sub() {},
  },
};
</script>

<style scoped>
</style>
