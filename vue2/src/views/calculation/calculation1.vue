<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-07-27 14:58:23
 * @LastEditors: Please set LastEditors
 * @Description: 颜色改变
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div @click="test">{{ selDate ? selDate : "请选择日期" }}</div>
    <div
      :class="(ProductCodeMark=='1' ||ProductCodeMark=='2')?'blue':(ProductCodeMark=='3'?'red':(ProductCodeMark=='4'?'yellow':'green'))"
    >颜色改变</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selDate: "",
      ProductCodeMark: "5",
      test1: [],
    };
  },
  created() {},
  methods: {
    test() {
      console.log(this.test1.length)
      if (JSON.stringify(this.test1) == "[]") {
        alert(JSON.stringify(this.test1));
      }
    },
  },
};
</script>

<style scoped>
.blue {
  color: blue;
}
.red {
  color: red;
}
.yellow {
  color: yellow;
}
.green {
  color: green;
}
</style>
