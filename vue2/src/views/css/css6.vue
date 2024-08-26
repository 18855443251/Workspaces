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
   <div class="box">
    <span>行高行高行高行高行高行高行高行高</span>
   </div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
    
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
//行距 = line-height - font-size
.box{
  width: 200px;
  height: 60px;
  font-size: 20px;
  //   background: red;
  background: blue;
  // padding: 17px 0;
  // 上下padding=60-26=34/2=17
  // 26是span的内容
}

span{
  background: red;
  // font-size: 20px;
  line-height: 20px;
  display: inline-block;
  // line-height: 30px;//会继承父元素
  // line-height: 1;//按子元素字体大小计算
  // line-height: 120%;//会继承父元素
}
</style>