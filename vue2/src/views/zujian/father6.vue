<template>
  <div>
    <!-- 兄弟组件之间传值 -->
    <brother1></brother1>
    <brother2></brother2>
  </div>
</template>

<script>
import brother1 from "./brother1";
import brother2 from "./brother2";
export default {
  components: {
    brother1,
    brother2,
  },
};
</script>

<style>
</style>