
<template>
  <div class="cardBox_view">
    <div v-for="(item, index) in tableList" :key="index">
      <slot :option1="item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      tableList: [
        {
          desc: "张三",
        },
        {
          desc: "李四",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style scoped>
</style>
