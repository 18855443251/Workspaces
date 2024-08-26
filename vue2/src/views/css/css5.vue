<!--
 * @Author: your name
 * @Date: 2021-09-13 15:26:52
 * @LastEditTime: 2021-09-13 16:35:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\css\css1.vue
-->
<template>
<!-- overflow属性 -->
  <div class="box">
   <div class="test">开头overflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverf
    lowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverf
    lowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverf
    lowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverf
    lowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverf
    lowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverf
    lowoverflowoverflowoverflowoverflowoverflow结尾</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
   
  }
};
</script>

<style scoped>
.test{
    width: 250px;
    height: 200px;
    background: rgb(227, 208, 208);
    /* overflow: hidden; */
    /*是如果文本没有超过盒子，那滚动条是被禁用的，如果文本超过了盒子，滚动条就会启用  */
     /* overflow: scroll; */
     /* 如果有溢出就会添加滚动条，没有溢出就正常显示 */
     /* overflow:auto; */
     overflow-x:auto;
     overflow-y: auto;
    /* text-overflow: ellipsis;
    white-space: nowrap; */
}
/* 设置滚动条样式 */
.test::-webkit-scrollbar{
  width: 20px;
  height: 20px;
  background-color: red;
}
/* 滚动条上的滚动滑块*/
.test::-webkit-scrollbar-thumb{
  background-color: blue;
}
/* 设置滚动条不显示 */
::-webkit-scrollbar {display:none}
</style>
