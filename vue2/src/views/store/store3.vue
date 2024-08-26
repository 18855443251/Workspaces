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
    <button @click="add(5)">+{{ $store.state.count }}</button>
    <button @click="setLogoutNum(2)">{{ $store.state.logoutNum }}</button>
    <!-- <button @click="ADD_NUM">+{{ $store.state.count }}</button> -->
    <p>{{ testName }}</p>
    <p>{{ age }}</p>
    <p>{{ cityObj.name }}</p>
    <p>{{ $store.getters.filterList }}</p>
    <p>{{filterList}}</p>
    <p>{{$store.getters.getList }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions,mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  // 用mapState等这种辅助函数的时候，前面的方法名和获取的属性名是一致的。
  computed: {
    // 如果一个变量或对象需要在多个页面和组件中使用，那么，可以使用mapState。
    ...mapState({
      testName: "name",
      age: "age",
      cityObj: "cityObj",
    }),
    // ...mapState(["age", "name", "cityObj"]),
    ...mapGetters(['filterList'])
  },
  // computed:mapState(["age", "name",'cityObj']),
  methods: {
    ...mapMutations({
      add: "ADD_NUM", // 将 `this.add()` 映射为 `this.$store.commit('ADD_NUM',5)`
    }),
    // ...mapMutations([
    //   "ADD_NUM", // 将 `this.ADD_NUM()` 映射为 `this.$store.commit('ADD_NUM')`
    // ]),
    ...mapActions({
      setLogoutNum: "setLogoutNum", // 将 `this.setLogoutNum()` 映射为 `this.$store.dispatch('setLogoutNum',2)`
    }),
    // ...mapActions([
    //   "setLogoutNum", // 将 `this.setLogoutNum()` 映射为 `this.$store.dispatch('setLogoutNum',2)`
    // ]),
  },
};
</script>

<style scoped>
</style>
