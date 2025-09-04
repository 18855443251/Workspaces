<template>
  <div id="card">
    <div class="test">传参</div>
    <div>
      从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶从顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
    </div>
    <router-link to="/query1?key=黑马&name=张三"
      >声明式导航查询参数传参</router-link
    >
    <div @click="test1">编程式导航跳转传参</div>
    <div @click="test2">编程式导航跳转传参</div>
    <div @click="test3">编程式导航跳转传参</div>
  </div>
</template>

<script>
export default {
  name: "routerQ1",
  data() {
    return {
      key: "黑马",
      name: "张三",
    };
  },
  mounted() {},
  methods: {
    test1() {
      this.$router.push("/query1");
    },
    test2() {
      this.$router.push(`/query1?key=${this.key}&name=${this.name}`);
    },
    test3() {
      this.$router.replace({
        path: "/query1",
        query: {
          key: "黑马",
          name: "张三",
          backUrl: this.$route.fullPath,
        },
      });
    },
  },
};
</script>

<style scoped>
.test {
  height: 900px;
  background: red;
}
</style>
