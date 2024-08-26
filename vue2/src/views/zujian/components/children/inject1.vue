
<template>
  <div>
    <div>{{ year }}</div>
    <div>{{ sex1 }}</div>
    <div>{{ obj.name }}</div>
    <div>{{ developer }}</div>
    <div>{{ this.app.update }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    developer() {
      return this.developerFn();
    },
    sex1() {
      return this.sex();
    },
  },
  inject: ["year", "sex", "obj", "developerFn", "app"],
  methods: {},
};
</script>
