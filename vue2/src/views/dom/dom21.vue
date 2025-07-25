<template>
  <div class="claneCache_view">
    <navBar title="首页" ref="nav" />
    <div @click="test">测试</div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {
      let popperList = this.$refs.nav.$el.children;//HTMLCollection(3)
      console.log(popperList)
      const listArray = Array.from(popperList);
      listArray.forEach((element) => {
        // console.log(element.classList, "哈哈");
        element.classList.remove("title-text");
      });
    },
  },
};
</script>
<style scoped>
</style>