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
    <p>在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。</p>
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
/* 在p标签前面添加伪元素。内容为：第一章 */
p::before {
  content: "第一章：";
} 
/* 在p标签后面添加伪元素。 */
p::after {
  content: "Hot!";
  color: red;
} 
/* 第一个单词 */
p::first-letter{color:green}
/* 第一行 */
p::first-line{color:blue}
</style>
