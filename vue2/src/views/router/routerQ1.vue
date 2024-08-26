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
    <router-link to="/query1?key=黑马&name=张三"
      >声明式导航查询参数传参</router-link
    >
    <div @click="test1">编程式导航跳转传参</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      key: "黑马",
      name: "张三",
    };
  },
  mounted() {},
  methods: {
    test1() {
      // this.$router.replace('/query1')
      // this.$router.push(`/params1?key=${this.key}&name=${this.name}`);
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

<style scoped></style>
