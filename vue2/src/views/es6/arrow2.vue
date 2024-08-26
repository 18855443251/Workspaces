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
    <div class="test">let</div>
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
    let test = function (x, y) {
      return x + y;
    };
    console.log(test(1, 2));
    let test1 = (x, y) => x + y;
    console.log(test1(3, 2));
  },
  mounted() {
    let a = document.querySelector(".test");
    a.addEventListener("click", () => {
      console.log(this);
    });
  },
  methods: {},
};
</script>

<style scoped></style>
