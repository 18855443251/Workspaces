<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div>
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div> 
    </div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
};
</script>
<style scoped>
/* 默认情况下主轴是水平方向的 */
/* 无论浏览器放大还是缩放，盒子宽度始终是612，border会根据0.8缩放  */
/* 浏览器100%情况 border为 6px*/
/* 浏览器125%情况 border为 5.6px*/
 /*
在伸缩布局中, 如果伸缩容器的宽度不够, 系统会自动压缩伸缩项的宽度, 保证所有的伸缩想都能放在伸缩容器中
如果当伸缩容器宽度不够时, 不想让伸缩项被压缩, 也可以让系统换行flex-wrap: wrap;

默认情况下如果伸缩容器的高度比换行之后所有伸缩项的高度还要高, 那么系统会自动将剩余空间平分之后添加给每一行
*/

.container {
  width: 612px;
  height: 550px;
  border: 6px solid #c3c3c3;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  /* flex-wrap: wrap; */
}
/* 能放的下内容就是600 */
.container div {
  width: 200px;
  border: 1px solid #9c0f0f;
}
/* 如果在伸缩容器中通过 align-items 修改侧轴的对齐方式, 是修改所有伸缩项侧轴的对齐方式
    如果是在伸缩项中通过 align-self 修改侧轴的对齐方式, 是单独修改当前伸缩项侧轴的对齐方式
    align-self属性的取值和align-items一样
*/
/* 设置了order属性的值, 那么系统就会按照设置的值从小到大的排序 */
.container div:nth-of-type(1) {
  background-color: coral;
  height: 50px;
  /* order:-1; */
  /* align-self: center; */
}
.container div:nth-of-type(2) {
  background-color: lightblue;
  height: 250px;
  /* order:3; */
}
.container div:nth-of-type(3) {
  background-color: khaki;
  height: 150px;
  /* order:2; */
}
.container div:nth-of-type(4) {
  background-color: pink;
  height: 50px;
  /* order:4; */
}
.container div:nth-of-type(5) {
  background-color: lightgrey;
  height: 120px;
  /* order:3; */
}
</style>


