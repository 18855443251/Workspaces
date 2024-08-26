    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div id="demo">id选择器</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      num: "",
      number: "",
    };
  },
  mounted() {
    // this.$nextTick(() => {
    let demo = document.getElementById("demo");
    demo.innerHTML = "id选择器修改";
    demo.style.color = "blue";
    demo.style.fontFamily = "Arial";
    demo.style.fontSize = "larger";
    demo.setAttribute("class", "w25");
    demo.removeAttribute("class");
    console.log(demo.getAttribute("class"));
    // });
  },
  methods: {},
};
</script>

<style scoped>
.w25 {
  width: 250px;
  height: 50px;
  background: rgb(164, 205, 159);
}
</style>
