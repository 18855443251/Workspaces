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
    <div>{{ $store.state.name }}</div>
    <div>{{ $store.state.nowMenuId }}</div>
    <div>{{ $store.state.lockNum }}</div>
    <div>{{ msgFilter("InterestCycle")["M"] }}</div>
    <div>{{ msgFilter("InterestCycle") }}</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      messages: {
        InterestCycle: {
          M: "每月",
          Q: "每季",
          554: "777",
        },
        saveDate: {
          239: "三十九个月",
          303: "三年",
          305: "五年",
        },
      },
    };
  },
  created() {
    this.$store.commit("SET_NAME", "李四");
    this.$store.commit("SET_NOW_MENUID", "菜单");
    //  this.$store.dispatch({
    //     type: "setLockNum",
    //     lockNum: 3,
    //   });
    this.$store.dispatch("setLockNum", 2);
    console.log(this.messages["InterestCycle"]["554"]);
  },
  methods: {},
};
</script>

<style scoped>
</style>
