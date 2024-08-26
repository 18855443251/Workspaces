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
      <li>2</li>
      <li>3</li>
      <li>4</li>
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
    //cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值
    // Ø 若为true，则代表克隆时会包含后代节点一起克隆
    // Ø 若为false，则代表克隆时不包含后代节点
    // Ø 默认为false
    let ul = document.querySelector("ul");
    const li1 = ul.children[0].cloneNode(true);
    ul.appendChild(li1);
  },
  methods: {},
};
</script>

<style scoped>
</style>
