<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="container">
    <RouterLink to="/member">个人中心</RouterLink>
    <!-- <div @click="$router.push('/member/userOrder')">我的订单</div> -->
    <RouterLink to="/member/userOrder">我的订单</RouterLink>
    <div class="article">
      <!-- 三级路由的挂载点 -->
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>