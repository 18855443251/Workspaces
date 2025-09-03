<template>
  <div id="card">
    <div>
      <router-link to="/params1">声明式导航动态路由跳转</router-link>
    </div>
    <div>
      <router-link to="/params1/张三">声明式导航动态路由跳转传参</router-link>
    </div>
    <div @click="test1">编程式导航跳转传参1</div>
    <div @click="test2">编程式导航跳转传参2</div>
    <div @click="test3">编程式导航跳转传参3</div>
    <div @click="test4">编程式导航跳转传参4</div>
    <div @click="test5">跳转详情全路径</div>
    <div @click="test6">跳转详情</div>
  </div>
</template>

<script>
export default {
  name: "routerP1",
  data() {
    return {
      name: "张三",
    };
  },
  mounted() {},

  methods: {
    test1() {
      this.$router.push(`/params1/${this.name}`);
    },
    test2() {
      this.$router.push({
        path: `/params1/${this.name}`,
      });
    },
    test3() {
      this.$router.push({
        name: "params1",
        params: {
          userName: this.name,
        },
      });
    },
    test4() {
      this.$router.push({
        name: "params1",
        params: {
          name: this.name,
        },
      });
    },
    test5() {
      this.$router.push({
        path: "/detail/张三/ages/18",
      });
    },
    test6() {
      this.$router.push({
        name: "detail",
        params: {
          username: "李四",
          age: 16,
        },
      });
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 30px;
}
</style>
