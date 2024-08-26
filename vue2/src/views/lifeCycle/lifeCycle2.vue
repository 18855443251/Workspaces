<!--
 * @Author: your name
 * @Date: 2020-10-29 11:08:39
 * @LastEditTime: 2021-07-29 16:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\imgDeal\daoruImg.vue
-->
<template>
  <div>
    <div @click="test">生命周期2</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {
      this.jump("/lifeCycle1");
    },
  },
};
</script>

<style scoped>
.logo-icon {
  width: 50px;
  height: 50px;
}
</style>
