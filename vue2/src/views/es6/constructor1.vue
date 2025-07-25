<template>
  <div>
    <div>constructor 属性</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    function Star() {}

    // Star.prototype.sing = function () {
    //   console.log('唱歌')
    // }
    // Star.prototype.dance = function () {
    //   console.log('跳舞')
    // }
    Star.prototype = {
      // 从新指回创造这个原型对象的 构造函数
      constructor: Star,
      sing: function () {
        console.log("唱歌");
      },
      dance: function () {
        console.log("跳舞");
      },
    };
    console.log(Star.prototype);
    console.log(Star.prototype.constructor == Star); //true
  },
  methods: {},
};
</script>
<style scoped>
</style>
