<template>
  <div id="card">
    <div>
      <div @click="leftBtn">左边</div>
      <div @click="rightBtn">右边</div>
      <!--组件的渲染-->
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      redirect: "",
    };
  },
  mounted() {},

  methods: {
    leftBtn() {
      this.$router.push("/main/left");
    },
    rightBtn() {
      this.$router.push("/main/right");
    },
  },
};
</script>

<style scoped>
</style>
