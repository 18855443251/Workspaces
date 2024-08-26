    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-11 14:06:49
 * @LastEditors: Please set LastEditors
 * @Description:对象调用
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
    };
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  created() {
    // store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且
    this.$store.dispatch("actionA").then(() => {
      console.log("hh");
    });
    //  this.$store.dispatch("actionB").then(() => {
    //   console.log("hh");
    // });
  },
  methods: {},
};
</script>

<style scoped>
</style>
