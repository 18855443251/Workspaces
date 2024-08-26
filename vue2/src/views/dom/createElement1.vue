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
    <ul>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerText = "2";
    // 插入到父元素的最后一个子元素
    // ul.appendChild(li);
    // 插入到父元素中某个子元素的前面
    ul.insertBefore(li, ul.children[0]);
  },
  methods: {},
};
</script>

<style scoped>
</style>
