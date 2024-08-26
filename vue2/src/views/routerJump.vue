<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ type }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // 通过this.$router.push({ path: "routerJump", query: params });跳转的
      //name:this.$route.query.name
      name: this.$route.params.name,
      type: this.$route.params.type
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped></style>
