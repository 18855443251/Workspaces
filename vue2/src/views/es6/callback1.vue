<template>
  <div class="page">
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
    // this.test1();
    this.test2();
    // this.test3({ name: "历史" }, (data) => {
    //   this.msg = data;
    // });
    // this.test4();
  },
  methods: {
    test1() {
      this.zhuTest("测试", (data) => {
        this.msg = data;
      });
    },
    test2() {
      let _this = this;
      this.zhuTest("测试", function (data) {
        _this.msg = data;
      });
    },
    test3(obj, callback) {
      const fn = (data) => {
        if (typeof callback === "function") {
          callback(data);
        }
      };
      this.zhuTest("测试3", fn);
    },
    test4() {
      this.zhuTest("测试", "55");
    },
    zhuTest(msg, callback) {
      console.log(callback);
      if (typeof callback === "function") {
        callback && callback(msg);
      } else {
        console.log(msg, callback);
      }
    },
  },
};
</script>
<style scoped>
</style>