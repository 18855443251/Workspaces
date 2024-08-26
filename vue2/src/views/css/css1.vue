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
    <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3">
      <span class="name">张三</span>
      <span class="name">张三</span>
      <span class="name">张三</span>
    </div>
    <span class="age">15</span>
    <span class="age">15</span>
    <span class="age">15</span>
    <div>
      <span class="add">地址</span>
      <span class="add">:</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //W3C 标准盒模型：
      // 属性width,height只包含内容content，不包含border和padding。
      // width=content
      // height=content
      // IE 盒模型：
      // 属性width,height包含border和padding，指的是content+padding+border
      // width=content +padding-left+padding-right+border-left+border-right，
      // height=content +padding-top+padding-bottom+border-top+border-bottom
      // box-sizing有两个值可选：
      // （1）content-box：默认值，标准盒模型
      // 盒子的大小=content+padding+border+margin
      // （2）border-box：IE盒模型
      // 盒子的大小：宽度=width+margin，高度=height+margin
    };
  },
};
</script>

<style scoped>
.div1 {
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 24px solid blue;
  background: aquamarine;
}
.div2 {
  width: 100px;
  /* height: 100px; */
  background: bisque;
}
.div3 {
  width: 700px;
  height: 100px;
  background: chartreuse;
  /* span是行内块级元素可以居中,块级元素不能text-align */
  text-align: center;
  /* font-size: 0; */
}
.name {
  width: 60px;
  background: #d38a24;
  /* span设置完字体大小后会和div之间产生间距，父元素div设置 font-size: 0或者行内元素设置  display: block; */
  font-size: 16px;
}
.age {
  display: inline-block;
  background: rgb(212, 182, 160);
  font-size: 36px;
}
.add {
  font-size: 36px;
}
</style>