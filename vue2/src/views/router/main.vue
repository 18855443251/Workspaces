    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div>
      <div @click="leftBtn">左边</div>
      <div @click="rightBtn">右边</div>
      <!--组件的渲染-->
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      redirect: "",
    };
  },
  mounted() {},

  methods: {
    leftBtn() {
      this.$router.push("/main/left");
    },
    rightBtn() {
      this.$router.push("/main/right");
    },
  },
};
</script>

<style scoped>
</style>
