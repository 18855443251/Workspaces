    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-23 10:26:57
 * @LastEditors: Please set LastEditors
 * @Description:事件目标event.target
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div class="card">
    <div class="position" ref="position" @click="position">鼠标位置</div>
    <ul @click="father" class="bgB">
      <li class="bgY">
        李四
        <span>张三</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // iphoneX 375*812
    console.log(window.screen.width); //屏幕分辨率宽375，看iphoneX
    console.log(window.screen.height); //屏幕分辨率高812,看iphoneX
    console.log(window.screen.availWidth); //屏幕可用工作区宽度375
    console.log(window.screen.availHeight); //屏幕可用工作区高度812
    console.log(window.screen.colorDepth); //位色彩色
  },
  methods: {
    father(e) {
      var a = e.target;
      a.style.color = "red";
      console.log(e);
      console.log(e.target);
      console.log(e.currentTarget);
    },
    position(e) {
      // 点击左上角,
      console.log(e.clientX); //10光标相对于该网页的水平位置(可视界面)
      console.log(e.clientY); //85光标相对于该网页的垂直位置(可视界面)
      console.log(e.type); //click 事件类型
      console.log(e.target); //该事件被传送到的对象
      console.log(e.screenX); //光标相对于该屏幕的水平位置
      console.log(e.screenY); //光标相对于该屏幕的水平位置
      console.log(e.pageX); //光标相对于该网页的水平位置（不适用ie）
      console.log(e.pageY); //光标相对于该网页的水平位置（不适用ie）
    },
  },
};
</script>

<style scoped>
.card {
  width: 800px;
  height: 1800px;
}
.bgB {
  width: 250px;
  height: 50px;
  /* background: rgb(51, 53, 189); */
}
.bgY {
  width: 150px;
  height: 50px;
  /* background: rgb(207, 205, 46); */
}
.position {
  width: 150px;
  height: 50px;
  margin: 10px;
  background: aquamarine;
}
</style>
