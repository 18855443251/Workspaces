<template>
  <div class="login-view"></div>
</template>
<script>
const context = weex.requireModule("context");
export default {
  name: "Login",
  data() {
    return {
      timeStamp: "",
    };
  },
  methods: {
    test() {
      this.getTimestamp((Timestamp) => {
        this.timeStamp = Timestamp;
      });
    },
  },
};
</script>
<style scoped>
</style>
