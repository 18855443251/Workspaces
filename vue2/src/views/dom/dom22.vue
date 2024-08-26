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
    <p>公共</p>
    <div @click="test">测试</div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {
      // 1. 使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
      var test = document.querySelector("p");
      let flag = false;
      test.onclick = function () {
        // test.style.backgroundColor = "purple";
        // test.style.color = '#fff';
        // test.style.fontSize = '25px';
        // test.style.marginTop = '100px';
        // 让我们当前元素的类名改为了 change

        // 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
        // 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器
        this.className = 'change';
        this.className = 'first change';
        if (!flag) {
          test.classList.add("change");
          flag = !flag;
        } else {
          test.classList.remove("change");
          flag = !flag;
        }
      };
    },
  },
};
</script>
<style scoped>
p {
  width: 100px;
  height: 100px;
  background-color: pink;
}

.change {
  background-color: purple;
  color: #fff;
  font-size: 25px;
  margin-top: 100px;
}
</style>