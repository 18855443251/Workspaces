<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:05
 * @LastEditors: Please set LastEditors
 * @Description: Object.assign合并对象
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div>let</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    window.addEventListener("click", function () {
      console.log(this); //window
    });
    let test = function () {
      setTimeout(function () {
        console.log(this);
      });
      console.log(this, "火锅"); //undefined
    };
    test();
    let test1 = () => console.log(this);
    test1();
  },
  methods: {},
};
</script>

<style scoped></style>
