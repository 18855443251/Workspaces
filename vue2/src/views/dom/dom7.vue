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
    <p>此示例使用 addEventListener() 方法将两个 click 事件添加到同一按钮。</p>
    <button id="myBtn">试一试</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    var x = document.getElementById("myBtn");
    x.addEventListener("click", this.myFunction);
    x.addEventListener("click", this.someOtherFunction);
  },
  methods: {
    myFunction() {
      alert("Hello World!");
    },
    someOtherFunction() {
      alert("此函数也被执行了！");
    },
  },
};
</script>

<style scoped>
</style>
