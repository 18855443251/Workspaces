<!--
 * @Author: your name
 * @Date: 2021-09-13 15:26:52
 * @LastEditTime: 2021-09-13 16:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\css\css1.vue
-->
<template>
  <div class="box">
    <p>
      伪类：将特殊的效果添加到特定选择器上。它是在已有元素上添加类别，不会产生新的元素
    </p>
    <p>第二个</p>
    <p>第三个</p>
    <div class="essence test">红色</div>
    <div class="”essence-test”">蓝色</div>
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
  data() {
    return {};
  },
};
</script>

<style scoped>
li:first-child {
  color: red;
}
li:nth-child(2) {
  color: blue;
}
li:not(:last-child) {
  border: 1px solid yellow;
}
li:nth-child(2n + 1) {
  background: green;
}
li:nth-child(2n) {
  background: yellow;
}
 [class*="essence"] {
  font-size: 20px;
  color: blue;
}
[class~="essence"] {
  color: red;
} 
</style>
