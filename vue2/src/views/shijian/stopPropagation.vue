    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-09 14:35:32
 * @LastEditors: Please set LastEditors
 * @Description:事件冒泡
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <table class="table" @click="tebleBtn">
      <!-- <tr @click.stop="trBtn()"> -->
      <tr @click="trBtn">
        <td class="bgB">
          <span @click="spanBtn()">背景蓝色</span>
        </td>
        <td class="bgY">
          <span id="bgY">背景黄色</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // var box = document.getElementById("bgY");
    // box.addEventListener(
    //   "click",
    //   function (e) {
    //     console.log("阻止元素点击");
    //   },
    //   true
    // );
  },
  methods: {
    // 冒泡，点儿子按钮，父亲也会触发，点父亲按钮，儿子不会触发，点儿子，先触发儿子后触发父亲
    // 冒泡、从下到上，从里到外，事件依次触发
    //@click.stop放在儿子上点击，防止事件往父亲冒泡，单击事件继续往外传播
    //e.stopPropagation();放在儿子上点击，防止事件往父亲冒泡，单击事件继续往外传播
    tebleBtn() {
      console.log("测试表");
    },
    trBtn(e) {
      e.stopPropagation();
      console.log("测试行");
    },
    spanBtn() {
      console.log("测试单行");
    },
  },
};
</script>

<style scoped>
.table {
  width: 500px;
  height: 500px;
  background: rgb(193, 196, 60);
}
tr {
  background: rgb(43, 197, 82);
}
span {
  background: rgb(184, 111, 16);
}
.bgB {
  background: rgb(69, 40, 235);
}
.bgY {
  background: rgb(207, 205, 46);
}
</style>
