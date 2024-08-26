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
    <navBar title="首页" ref="nav" />
    <div @click="test">测试</div>
    <h1 id="header">我的标题</h1>
    <img id="image" src="@/assets/img/close.png" />
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      //appendChild()方法将一个节点添加到指定父节点的子节点列表末尾
      // insertBefore ()方法将一个节点添加到父节点的指定子节点前面
      // . removeChild()方法从DOM中删除一个 子节点,返回删除的节点。
    };
  },
  created() {},
  methods: {
    test() {
      //   document.getElementById("header").style.color = "red";
      //   document.getElementById("image").src = require("@/assets/img/agree.png");
      //   document.getElementById("header").innerHTML = "新标题";
      //   console.log(document.getElementById("header"));
      console.log(this.$refs.nav, "后管");
      let popper = this.$refs.nav.$el;
      // HTMLCollection(3)
      if (
        Array.from(popper.children).some((v) => v.className === "title-text")
      ) {
        let a = this.$refs.nav.$el.getElementsByClassName("title-text");
        console.log(a); //
        a[0].innerHTML = "改变标题";
        const el = document.createElement("div");
        el.className = "right-button";
        el.style = "border-top: solid 1px #E4E7ED; padding:0; color: #606266;";
        el.innerHTML = `<div class="title-node" style="height:38px;line-height: 38px">
          <div  style="color:red;margin-right:20px" id="reset">重置</div>
          </div>`;
        popper.appendChild(el);
        // document.getElementById("reset").onclick = () => {
        //   console.log("重置");
        // };
        document.getElementById("reset").onmouseover = () => {
          console.log("重置");
        };
        document.getElementById("reset").onmouseout = () => {
          console.log("重置");
        };
      }
    },
  },
};
</script>
<style scoped>
</style>