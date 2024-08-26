<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:21:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\son.vue
-->
<template>
  <div>
    <div>{{ obj }}</div>
    <div>{{ name }}</div>
    <div class="son">获取dom</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "获取子组件变量",
      obj: { name: "张三" },
    };
  },
  beforeCreate() {
    console.log(document.querySelectorAll(".son")[0], "dom-子组件beforeCreate"); //undefined
    console.log(this.msg, "变量-子组件beforeCreate"); //undefined
    console.log(this.obj, "对象-子组件beforeCreate"); //undefined
  },
  watch: {
    msg: {
      handler(newval) {
        this.$nextTick(() => {
          console.log(
            document.querySelectorAll(".son")[0],
            "dom-子组件watch"
          ); //正常
        });
        console.log(this.msg, "变量-子组件watch"); //正常
        console.log(this.obj, "对象-子组件watch"); //正常
      },
      immediate: true,
    },
  },
  created() {
    console.log(document.querySelectorAll(".son")[0], "dom-子组件created"); //undefined
    console.log(this.msg, "变量-子组件created"); //正常
    console.log(this.obj, "对象-子组件created"); //正常
  },
  beforeMount() {
    console.log(document.querySelectorAll(".son")[0], "dom-子组件beforeMount"); //undefined
    console.log(this.msg, "变量-子组件beforeMount"); //正常
    console.log(this.obj, "对象-子组件beforeMount"); //正常
  },
  beforeRouteEnter(to, from, next) {
    if (to) {
      next((vm) => {
        console.log("子beforeRouteEnter");
      });
    } else {
      next(); //放行
    }
  },
  computed: {
    name() {
      this.$nextTick(() => {
        console.log(document.querySelectorAll(".son")[0], "dom-子组件computed"); //正常
      });
      console.log(this.msg, "变量-子组件computed"); //正常
      console.log(this.obj, "对象-子组件computed"); //正常
      return "子computed";
    },
  },
  mounted() {
    console.log(document.querySelectorAll(".son")[0], "dom-子组件mouted"); //正常
    console.log(this.msg, "变量-子组件mouted"); //正常
    console.log(this.obj, "对象-子组件mouted"); //正常
  },
  beforeUpdate() {
    console.log("子组件beforeUpdate");
  },
  update() {
    console.log("子组件update");
  },
  beforeDestroy() {
    console.log(
      document.querySelectorAll(".son")[0],
      "dom-子组件beforeDestroy"
    ); //正常
    console.log(this.msg, "变量-子组件beforeDestroy"); //正常
    console.log(this.obj, "对象-子组件beforeDestroy"); //正常
  },
  destroyed() {
    console.log(document.querySelectorAll(".son")[0], "dom-子组件destroyed"); //正常
    console.log(this.msg, "变量-子组件destroyed"); //正常
    console.log(this.obj, "对象-子组件destroyed"); //正常
  },
  methods: {},
};
</script>
