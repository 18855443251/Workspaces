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
    <div title="one" class="ctest"  id="test">哈哈哈</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 1.！important 优先级10000
      // 2.内联选择器 优先级1000
      // 3.ID选择器 优先级100
      // 4.类别选择器 优先级10
      // 5.属性选择器 优先级10
      // 6.伪类 优先级10
      // 7.元素选择器 优先级1
      // 8.通配符选择器 优先级0
      // 9.继承选择器 没有优先级
    };
  },
};
</script>

<style scoped>
div:first-child {
  color: yellow;
} 
.ctest{
    color:red
}
[title]{
    color:blue
}
div{
    color:green
}
*{
    color:rgb(146, 192, 213)
}
</style>