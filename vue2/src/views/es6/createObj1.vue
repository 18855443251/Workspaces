<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    let a = {
      name: "张三",
      sing: function () {
        console.log("唱歌");
      },
    };
    let b = new Object();
    b.name = "张三";
    a.sing()
    console.log(a, "好好");
    console.log(b, "好好");
  },
  methods: {},
};
</script>
<style scoped>
</style>