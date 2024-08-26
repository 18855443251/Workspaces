<template>
  <div class="page">
    <div>
      <son1></son1>
      <div>{{ msg }}</div>
      <div>{{ obj }}</div>
      <div>{{ name }}</div>
      <div @click="test">测试</div>
      <div class="h50"></div>
      <div>哈哈哈</div>
    </div>
  </div>
</template>
<script>
import son1 from "./components/son1";
export default {
  name: "lifeCycle1",
  components: { son1 },
  data() {
    return {
      msg: "变量",
      obj: { name: "张三" },
      scrollTop: 0,
    };
  },
  // 使用keep-alive后activatedca才会被触发 ，跳转页面deactivated才会触发
  // 返回页面activated也会触发
  // 返回到原来使用keep-alive的页面beforeCreate以及其他生命周期都不会被触发，但是beforeRouteEnter会被触发
  activated() {
    console.log(this.scrollTop, "激活");
    console.log(this.scrollTop,'scrollTop')
    // window.scrollTo({
    //   top: this.scrollTop,
    //   behavior: "smooth",
    // });
  },
  deactivated() {
    console.log("组件离开时调用");
  },
  // watch在beforeCreate和created之间
  // computed在beforeMount和mounted之间
  // mouted会获取到dom,所以在mouted之前的钩子函数想获取到dom都得加上$nextTick
  // 父beforeCreate ->父watch-> 父created -> 父beforeMount ->父computed-> 子beforeCreate ->子watch-> 子created -> 子beforeMount ->子computed->父beforeRouteEnter-> 子mounted -> 父mounted
  // 父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed
  beforeCreate() {
    console.log(document.querySelectorAll(".son")[0], "dom-父组件beforeCreate"); //undefined
    console.log(this.msg, "变量-父组件beforeCreate"); //undefined
    console.log(this.obj, "对象-父组件beforeCreate"); //undefined
  },
  watch: {
    msg: {
      handler(newval) {
        this.$nextTick(() => {
          console.log(document.querySelectorAll(".son")[0], "dom-父组件watch"); //正常
        });
        console.log(this.msg, "变量-父组件watch"); //正常
        console.log(this.obj, "对象-父组件watch"); //正常
      },
      immediate: true,
    },
  },
  created() {
    console.log(document.querySelectorAll(".son")[0], "dom-父组件created"); //undefined
    console.log(this.msg, "变量-父组件created"); //正常
    console.log(this.obj, "对象-父组件created"); //正常
  },
  beforeMount() {
    console.log(document.querySelectorAll(".son")[0], "dom-父组件beforeMount"); //undefined
    console.log(this.msg, "变量-父组件beforeMount"); //正常
    console.log(this.obj, "对象-父组件beforeMount"); //正常
  },
  beforeRouteEnter(to, from, next) {
    if (to) {
      next((vm) => {
        vm.$nextTick(() => {
          console.log(
            document.querySelectorAll(".son")[0],
            "dom-父组件beforeRouteEnter"
          ); //正常
        });
        console.log(vm.msg, "变量-父组件beforeRouteEnter"); //正常
        console.log(vm.obj, "对象-父组件beforeRouteEnter"); //正常
      });
    } else {
      next(); //放行
    }
  },
  computed: {
    name() {
      this.$nextTick(() => {
        console.log(document.querySelectorAll(".son")[0], "dom-父组件computed"); //正常
      });
      console.log(this.msg, "变量-父组件computed"); //正常
      console.log(this.obj, "对象-父组件computed"); //正常
      return "父computed";
    },
  },
  mounted() {
    console.log(this.$route, "路由");
    console.log(document.querySelectorAll(".son")[0], "dom-父组件mouted"); //正常
    console.log(this.msg, "变量-父组件mouted"); //正常
    console.log(this.obj, "对象-父组件mouted"); //正常
  },
  beforeUpdate() {
    console.log("父组件beforeUpdate");
  },
  update() {
    console.log("父组件update");
  },
  // lifeCycle1被keep-alive后，beforeDestroy和destroyed不会走
  beforeDestroy() {
    console.log(
      document.querySelectorAll(".son")[0],
      "dom-父组件beforeDestroy"
    ); //正常
    console.log(this.msg, "变量-父组件beforeDestroy"); //正常
    console.log(this.obj, "对象-父组件beforeDestroy"); //正常
  },
  destroyed() {
    console.log(document.querySelectorAll(".son")[0], "dom-父组件destroyed"); //正常
    console.log(this.msg, "变量-父组件destroyed"); //正常
    console.log(this.obj, "对象-父组件destroyed"); //正常
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop;
    console.log(this.scrollTop, "scrollTop");
    next();
  },
  methods: {
    test() {
      this.jump("/lifeCycle2");
    },
  },
};
</script>
<style scoped>
.h50 {
  height: 1500px;
  background: rgb(159, 159, 215);
}
</style>