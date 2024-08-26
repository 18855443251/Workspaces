    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-25 15:01:27
 * @LastEditors: Please set LastEditors
 * @Description:offset
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div id="father"></div>
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
    // iphoneX  375*812 offsetHeight就是样式里面固定的宽度
    var father = document.getElementById("father");
    console.log(father.offsetWidth + "父亲宽"); //250
    console.log(father.offsetHeight + "父亲高"); //150
    console.log(father.offsetLeft + "父亲左边"); //距离浏览器左边25=margin25
    console.log(father.offsetTop + "父亲上边"); //距离浏览器上边105=160/2+margin25
    console.log(father.offsetParent); //父亲没有定位以body,否则以定位元素
    console.log(father.style.width); //行内有样式,style只能获取到行内的，style.width返回的是字符串，offsetTop返回的是数字
  },
  methods: {},
};
</script>

<style scoped>
#father {
  width: 500px;
  height: 300px;
  padding: 10px;
  border: 5px solid rgb(42, 38, 38);
  background-color: salmon;
  margin: 50px;
  position: relative;
}
</style>
