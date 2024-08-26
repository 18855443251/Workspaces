    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div>{{ $route.query }}</div>
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
      handler: function (route) {
        // console.log(route, "好好");
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  mounted() {
    console.log(this.$route.query, "query");
  },

  methods: {},
};
</script>

<style scoped>
</style>
