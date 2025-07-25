<template>
  <div class="page">
    <div>callback</div>
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
    // this.test('张三',()=>{
    //     console.log('进来了')
    // })
    // const fn = () => {
    //  console.log('进来了')
    // };
    this.test1("张三", {
      fn() {
        console.log("进来了");
      },
    });
  },
  methods: {
    test(val, callback) {
      if (typeof callback == "function") {
        callback();
      }
    },
    test1(val, obj) {
      if (typeof obj.fn == "function") {
        obj.fn();
      }
    },
  },
};
</script>
<style scoped>
</style>