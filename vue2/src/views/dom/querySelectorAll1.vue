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
    <div class="test">类选择器1</div>
    <div class="test">类选择器2</div>
    <p>标签</p>
    <p>标签</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // CSS选择器匹配的NodeList 对象集合
    // 如果没有匹配到，则返回[]
    // 得到的是一个伪数组：
    // Ø 有长度有索引号的数组
    // Ø 但是没有 pop() push() 等数组方法
    // 想要得到里面的每一个对象，则需要遍历（for）的方式获得
    let div = document.querySelectorAll(".test");
    let p = document.querySelectorAll("p");
    let test = document.querySelectorAll("div.test");
    div.forEach((item) => {
      item.style.color = "red";
    });
    // div[0].style.color = "red";
    console.log(div);
    console.log(p);
    console.log(test);
  },
  methods: {},
};
</script>

<style scoped>
</style>
