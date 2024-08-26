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
    <button id="myBtn">试一试</button>
    <div id="demo">测试</div>
    <input
      type="button"
      value="隐藏文本"
      onclick="document.getElementById('demo').style.visibility='hidden'"
    />
    <input
      type="button"
      value="显示文本"
      onclick="document.getElementById('demo').style.visibility='visible'"
    />
    <h1 onclick="this.innerHTML='谢谢！'">请点击此文本！</h1>
    <input type="text" id="fname" @change="myFunction($event)" />
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
    // 给按钮添加事件
    document.getElementById("myBtn").onclick = this.displayDate;
  },
  methods: {
    displayDate() {
      document.getElementById("demo").innerHTML = Date();
    },
    // 失去焦点转变成大写
    // target就表示触发事件的元素。
    myFunction($event) {
      // console.log($event.target.value)
      // console.log($event.target.id)
      // console.log($event.target.offsetHeight)
      console.log($event.currentTarget)
      // var x = document.getElementById("fname");
      // x.value = x.value.toUpperCase();
      // console.log(x.value)

    },
  },
};
</script>

<style scoped>
</style>
