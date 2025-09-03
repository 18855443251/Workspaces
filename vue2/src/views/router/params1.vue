<template>
  <div id="card">
    <div>
      <div>接收参数</div>
      <div>{{ $route.params }}</div>
      <!-- <router-link :to="`/user1/${$route.params.name}/uesrSon1`"
        >用户</router-link
      > -->
    </div>
  </div>
</template>

<script>
export default {
  name: "params1",
  data() {
    return {
      redirect: "",
    };
  },
  watch: {
    $route: {
      handler: function (to, from) {
        console.log(to, from, "好好");
      },
      immediate: true,
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>
