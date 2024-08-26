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
      <div @click="test">左测试</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "left",
  data() {
    return {
      redirect: "",
    };
  },
  mounted() {},

  methods: {
    test() {
      let id = 1;
      this.$router.push("/main/mainDetail/" + id);
    },
  },
};
</script>

<style scoped>
</style>
