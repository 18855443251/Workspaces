<template>
  <div class="page">
    <div id="app">
      <div v-if="isShow">
        <input type="text" v-model="updateAlias" placeholder="'请输入别名'" />
        <div @click="isShow = false">关闭</div>
      </div>
      <div @click="open">打开</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  data() {
    return {
      isShow: false,
      updateAlias: "张三",
    };
  },
  watch: {
    updateAlias: {
      handler(newval, oldVal) {
        if (newval) {
          console.log(newval, "newval");
        }
        console.log(oldVal, "oldVal");
      },
      immediate: true,
    },
  },
  methods: {
    open() {
      this.isShow = true;
    },
  },
};
</script>
<style scoped>
</style>