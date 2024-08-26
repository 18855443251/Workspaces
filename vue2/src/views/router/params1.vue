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
      <div>接收参数</div>
      <div>{{ $route.params }}</div>
      <router-link :to="`/user1/${$route.params.name}/uesrSon1`"
        >用户</router-link
      >
      <!-- <router-link to="uesrSon1" append>用户</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {
      redirect: "",
    };
  },
  watch: {
    $route: {
      handler: function (to,from) {
        console.log(to.name,from.name, "好好");
        this.redirect = to.query && to.query.redirect;
      },
      immediate: true,
    },
  },
  mounted() {
    console.log(this.$route.params);
  },

  methods: {},
};
</script>

<style scoped>
</style>
