
<template>
  <div class="page">
     <!-- this指向 -->
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.zhuTest();
  },
  methods: {
    zhuTest() {
        // var that = this;//定义一个引用变量
        setTimeout(function () {
          console.log(this);//指向window
        },0);
        setTimeout(() => {
          console.log(this);//指向VueComponent
        },0);
      }
  },
};
</script>
<style scoped>
</style>