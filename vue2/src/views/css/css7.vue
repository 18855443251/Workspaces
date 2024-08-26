<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <h6>div设置高度</h6>
    <div class="row h40">
      <img src="@/assets/img/close.png" class="row-img" />
      <img src="@/assets/img/close.png" class="row-img" />
      <img src="@/assets/img/close.png" class="row-img" />
    </div>
    <h6>div没有高度</h6>
    <div class="row"><img src="@/assets/img/close.png" class="row-img" /></div>
    <h6>div没有高度,span设置字体大小</h6>
    <div class="row">
      <span>张三</span>
    </div>
    <h6>div没有高度,img和span</h6>
    <div class="row">
      <img src="@/assets/img/close.png" class="row-img" />
      <span>张三</span>
    </div>
    <h6>div没有高度,vertical-align: top</h6>
    <div class="row">
      <img
        src="@/assets/img/close.png"
        class="row-img"
        style="vertical-align: top"
      />
      <span style="vertical-align: top">张三</span>
    </div>
    <h6>div没有高度,vertical-align: middle</h6>
    <div class="row">
      <img
        src="@/assets/img/close.png"
        class="row-img"
        style="vertical-align: middle"
      />
      <span style="vertical-align: middle">张三</span>
    </div>
    <h6>div没有高度,vertical-align: bottom</h6>
    <div class="row">
      <img
        src="@/assets/img/close.png"
        class="row-img"
        style="vertical-align: bottom"
      />
      <span style="vertical-align: bottom">张三</span>
    </div>
    <h6>div没有高度,flex</h6>
    <div class="row flex">
      <img src="@/assets/img/close.png" class="row-img" />
      <span>张三</span>
    </div>
    <h6>div没有高度,左右都用flex</h6>
    <div class="row flex">
      <img src="@/assets/img/close.png" class="row-img" />
      <span>张三</span>
      <div class="flex">
        <span>张三</span>
      </div>
    </div>
    <h6>div没有高度,左flex,右边没有设置</h6>
    <div class="row flex">
      <img src="@/assets/img/close.png" class="row-img" />
      <span>张三</span>
      <div>
        <span>张三</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    // div不设置高度的情况下，display:inline-block布局的元素在页面中显示时会出现几像素的间隙。使用font-size:0解决
    // div不设置高度的情况下，span不设置字体大小，不会和div元素之间出现几像素的间隔
    //行距 = line-height - font-size
    // 行高只对文本生效，因为只有文本才会有基线。
    // 父元素设置行高，子元素会继承父元素的行高
    // 父元素设置高度，子元素设置行高和父元素一样的高度就会垂直居中
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.row {
  background: rgb(199, 172, 172);
  margin-top: 20px;
  /* font-size: 0; */
}
.h40 {
  height: 40px;
}
.row-img {
  width: 40px;
  height: 40px;
  background: rgb(27, 35, 183);
}
span {
  font-size: 20px;
  background: rgb(64, 221, 156);
}
/* flex会消除 inline-block间隙*/
.flex {
  display: flex;
  /* align-items: flex-end;底部对齐 */
  /* align-items: flex-start; 顶部对齐*/
  align-items: center;
}
</style>