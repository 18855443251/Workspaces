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
    <p>30px</p>
    <div class="test1">30px</div>
    <div class="test2">32px</div>
    <div class="test3">37.5px</div>
    <div class="test4">75px</div>
    <div class="test5">1rem=75px</div>
    <div class="test6">1em=30px</div>
    <!-- test7设置字体大小为75px -->
    <div class="test7">
      <!-- span1设置1em=75px -->
      <span class="span1">1em=75px</span>
    </div>
    <!-- 如果写到行内，浏览器会展示以37.5px,不显示rem为单位 -->
    <div style="font-size: 37.5px">75px</div>
    <h1>标题1~2em=60px</h1>
    <h2>标题2~1.5em=40.5px</h2>
    <h3>标题3~1.17em=35.1px</h3>
    <h4>标题4~1.33em=39.9px</h4>
    <h5>标题5~0.83em=24.9px</h5>
    <h6>标题6~0.67em=20.1px</h6>
    <div class="test8">
      <div>百分比</div>
    </div>
    <div class="test9">
    </div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      // px：绝对长度单位，是 CSS 像素，来描述一个元素的尺寸。
      // rpx：微信小程序独有的、解决屏幕自适应的尺寸单位。
      // em：相对单位，em 是相对于当前元素的父元素的 font-size 进行计算,如果当前元素未设置则相对于浏览器的默认字体尺寸。
      // rem：相对单位，相对根节点html的字体大小来计算。
      // vw/vh：vw 相对于视窗的宽度，vh 相对于视窗的高度。
      // 百分比：子元素的百分比完全相对于直接父元素。
    };
  },
};
</script>
<style scoped>
/* 0.4rem=30px */
.test1 {
  font-size: 30px;
}
/* 0.42667rem=32px */
.test2 {
  font-size: 32px;
}
/* 0.5rem=37.5px*/
.test3 {
  font-size: 37.5px;
}
/* 1rem=75px */
.test4 {
  font-size: 75px;
}
.test5 {
  font-size: 1rem;
}
/* body设置字体大小为30px 则1em=30px 如果body不设置大小1em=75px*/
.test6 {
  font-size: 1em;
}
.test7 {
  font-size: 75px;
}
.span1 {
  font-size: 1em;
}
.test8 {
  width: 25%;
  height: 200px;
  background: blue;
  font-size: 32px;
}
.test8 > div {
  width: 25%;
  height: 200px;
  background: red;
}
/* 1vw=7.5px  25vw=187.5px*/
.test9{
  width: 25vw;
  height: 200px;
  background: blue;
}
</style>