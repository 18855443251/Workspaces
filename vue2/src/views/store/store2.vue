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
    <button @click="add">+{{ $store.state.count }}</button>
    <!-- <button @click="sub">-{{ $store.state.count }}</button> -->
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ cityObj.name }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    age() {
      return this.$store.state.age;
    },
    name() {
      return this.$store.state.name;
    },
    cityObj() {
      return this.$store.state.cityObj;
    },
  },
  methods: {
    add() {
      // this.$store.commit("ADD_NUM");
      this.$store.commit({
        type: "ADD_NUM",
        // amount: 10,
      });
    },
    sub() {
      this.$store.commit("INC_NUM");
    },
  },
};
</script>

<style scoped>
</style>
