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
    <form name="myForm">
      <p>名字：<input type="text" name="fname" /></p>
      <p>姓氏：<input type="text" name="lname" value="Bill" /></p>
    </form>
    <a name="html" href="/html/index.asp">HTML 教程</a><br />
    <a name="css" href="/html/index.asp">CSS 教程</a><br />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    console.log(document.body.innerHTML);
    console.log("nodeName", document.documentElement.nodeName); //HTML
    console.log("文档中表单元素的数量是", document.forms.length);
    console.log("head属性的标签名称是", document.head.tagName); //HEAD
    console.log("图片数量为", document.images.length); 
    console.log("links数量", document.links.length); 
    console.log("scripts数量", document.scripts.length);
    console.log("title", document.title); //手机银行
  },
  methods: {},
};
</script>

<style scoped>
</style>
