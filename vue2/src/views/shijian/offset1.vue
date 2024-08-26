    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-19 17:06:18
 * @LastEditors: Please set LastEditors
 * @Description:offset
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div ref="header" class="header">头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部头部</div>
    <div id="father">
      <div id="son">儿子</div>
    </div>
    <div class="test" ref="test" style="width:50px;height:210px"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  //   created获取不到document
  mounted() {
    // iphoneX  375*812
    // 给宽度和高度:offsetHight=height;offsetWidth=width
    // 不给宽度和高度:offsetHight=内容+padding+border;offsetWidth=内容+padding+border
    //border: 1px 为1px时不会被转换
    var offsetHight = this.$refs.header.offsetHeight;
    console.log(offsetHight + "头部高"); //45=头部内容40+头部padding3+头部border2 不给宽度和高度

    var father = document.getElementById("father");
    console.log(father.offsetWidth + "父亲宽"); //325=父亲内容310+父亲padding10+父亲border5
    console.log(father.offsetHeight + "父亲高"); //40=父亲内容25+父亲padding10+父亲border5
    console.log(father.offsetLeft + "父亲左边"); //距离浏览器左边25=父亲margin25
    console.log(father.offsetTop + "父亲上边"); //距离浏览器上边152=80+头部2.5+头部高45+父亲margin25
    console.log(father.offsetParent); //儿子的父亲，父亲没有定位以body,否则以定位元素
    console.log(father.style.width); //行内有样式,style只能获取到行内的，style.width返回的是字符串，offsetTop返回的是数字

    var son = document.getElementById("son");
    console.log(son.offsetWidth + "儿子宽"); //45 内容42+儿子padding3
    console.log(son.offsetHeight + "儿子高"); //25 内容22+儿子padding3
    console.log(son.offsetLeft + "儿子左边"); //距离父亲左边因为父亲有定位，否则就相对浏览器5=父亲padding5
    console.log(son.offsetTop + "儿子上边"); //距离父亲上边，因为父亲有定位，否则就相对浏览器5=父亲padding5

    console.log(this.$refs.test.offsetHeight); //210,有行内样式就要行内样式
    console.log(this.$refs.test.style.height); //210px，有行内样式就要行内样式
  },
  methods: {},
};
</script>

<style scoped>
.header {
  margin-top: 5px;
  padding: 3px;
  border: 1px solid red;
}
#father {
  padding: 10px;
  border: 5px solid rgb(42, 38, 38);
  background-color: rgb(117, 216, 246);
  margin: 50px;
  position: relative;
}
#son {
  width: 90px;
  height: 50px;
  padding: 3px;
  background: rgb(119, 226, 119);
}
.test {
  width: 300px;
  height: 200px;
  background: chocolate;
  margin-left: 30px;
}
</style>
