<!--
 * @Author: your name
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-11 16:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\tankuan.vue
-->
<template>
  <div>
    <div class="test" :class="[open?'active':'']" @click="test"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      open: false,
    };
  },
  created() {},
  methods: {
    test() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.test {
  box-sizing: border-box;
  width: 80px;
  height: 48px;
  border-radius: 48px;
  background-color: #e2e4ea;
}
.test::after {
  top: 4px;
  left: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  content: "";
}
.test::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e2e4ea;
}
.test.active {
  background-color: #b8a076;
}
.test.active:after {
  transform: translateX(0.32rem);
}
.test.active:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
</style>
