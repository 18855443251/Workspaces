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
    <div></div>
    <div>
      <router-link to="/params1/张三">声明式导航动态路由跳转传参</router-link>
    </div>
    <div>
      <router-link to="/params1">声明式导航动态路由跳转</router-link>
    </div>
    <div @click="test1">编程式导航跳转传参</div>
    <div @click="test2">跳转详情</div>
    <div @click="test3">跳转详情</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "张三",
    };
  },
  mounted() {},

  methods: {
    test1() {
      // this.$router.push(`/params1/${this.name}`);
      this.$router.push({
        name: "params1",
        params: {
          name: this.name,
        },
      });
    },
    test2() {
      this.$router.push({ path: "/detail/张三/ages/18" });
    },
    test3() {
      this.$router.push({
        path: "/detail/张三/ages/18",
      });
    },
  },
};
</script>

<style scoped>
</style>
