
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
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      redirect: "",
    };
  },
  mounted() {
    console.log(this.username);
  },

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
