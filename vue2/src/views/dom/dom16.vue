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
    <ul id="ulall">
      <li>1111</li>
      <li>2222</li>
      <li>3333</li>
      <li>4444</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.test1();
    // this.test2();
  },
  methods: {
    test1() {
      // 100个li就要占用100个内存空间
      // 访问dom的次数越多，引起浏览器重绘与重排的次数也就越多，就会延长整个页面的交互就绪时间
      // 首先要找到ul，然后遍历li，然后点击li的时候，又要找一次目标的li的位置，才能执行最后的操作，每次点击都要找一次li；
      var oUl = document.getElementById("ulall");
      var aLi = oUl.getElementsByTagName("li");
      for (let i = 0; i < aLi.length; i++) {
        aLi[i].onclick = function () {
          console.log(aLi[i]);
          aLi[i].style.backgroundColor = "red";
        };
      }
    },
    test2() {
      // 用父级ul做事件处理，当li被点击时，由于冒泡原理，事件就会冒泡到ul上，因为ul上有点击事件，所以事件就会触发
      //   target就表示触发事件的元素。
      //   window.event" 是 Internet Explorer 独有的事件对象。它在其他浏览器中并不可用。
      var oUl = document.getElementById("ulall");
      var aLi = oUl.getElementsByTagName("li");
      oUl.onclick = function (e) {
        var e = window.event || e; //兼容
        var tar = e.target || e.srcElement; //取得触发事件的元素节点
        if (tar.nodeName == "LI") {
          tar.style.backgroundColor = "red";
        }
      };
    },
  },
};
</script>

<style scoped>
</style>
