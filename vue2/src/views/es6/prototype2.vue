
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
    let that;
    function Star(uname) {
      // that = this
      // console.log(this)
      this.uname = uname;
    }
    // 原型对象里面的函数this指向的还是 实例对象 ldh
    Star.prototype.sing = function () {
      that = this;
      console.log("唱歌");
    };
    // 实例对象 ldh
    // 构造函数里面的 this 就是  实例对象  ldh
    const ldh = new Star("刘德华");
    ldh.sing();
    console.log(that === ldh); //true
  },
  methods: {},
};
</script>
<style scoped>
</style>