    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-03-20 14:47:08
 * @LastEditors: Please set LastEditors
 * @Description:preventDefault
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div class="header" ref="header">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
    <div class="father" ref="father">
      <div class="son" ref="son">儿子</div>
    </div>
    <div class="ding" ref="ding" :class="headerFixed?'bgY':'bgG'">固定定位</div>
  </div>
</template>

<script>
import "@/myTool/myTool.js";
export default {
  name: "home",
  data() {
    return {
      headerFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.changeBg); //事件监听滚动条
    this.test();
  },
  methods: {
    handleScroll() {
      // ie9+最新浏览器window.pageYOffset
      // 火狐和其他浏览器document.documentElement.scrollTop
      // 兼容写法
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    },
    test() {
      // 总宽度=内容+border+padding   margin，padding,width,height取一半，,border是多少取多少

      // 头部
      console.log(this.$refs.header.offsetTop + "顶部"); //85=80+header_margin5.5(取5)
      console.log(this.$refs.header.offsetLeft + "左边"); //6=header_margin5.5
      console.log(this.$refs.header.clientHeight + "高度"); //42=header高度45-header_border3
      console.log(this.$refs.header.clientWidth + "宽度"); //386=header宽度389-header_border3

      //爸爸
      console.log(this.$refs.father.offsetTop + "顶部"); //136=header_offsetTop85+header_height45+header_margin5.5
      console.log(this.$refs.father.offsetLeft + "左边"); //1=father_margin-left1
      console.log(this.$refs.father.clientHeight + "高度"); //95=高度100-border5(左和右)
      console.log(this.$refs.father.clientWidth + "宽度"); //95=宽度100-border5(左和右)

      // 儿子
      console.log(this.$refs.son.offsetTop + "顶部"); //143=father_offsetTop136+father_padding5+father_border2.5(取一半上边)
      console.log(this.$refs.son.offsetLeft + "左边"); //10=father_margin1+father_border2.5+son_margin1.5+father_padding5
      console.log(this.$refs.son.clientHeight + "高度"); //23（内容）=高度25-border2(左和右)
      console.log(this.$refs.son.clientWidth + "宽度"); //43（内容）=宽度45-border2(左和右)

      // 定位
      console.log(this.$refs.ding.offsetTop + "顶部"); //239=father_offsetTop136+father_Height100+ding_margin3.5
      console.log(this.$refs.ding.offsetLeft + "左边"); //3=ding_margin3
      console.log(this.$refs.ding.clientHeight + "高度"); //23（内容）=高度25-border2(左和右)
      console.log(this.$refs.ding.clientWidth + "宽度"); //395（内容）=宽度397-border2(左和右)

      console.log(document.documentElement.scrollHeight); //1100
      console.log(document.documentElement.scrollWidth); //400
      // iphoneX375*812
      console.log(document.documentElement.clientHeight); //812
      console.log(document.documentElement.clientWidth); //375
    },
    changeBg() {
      var a = this.$refs.ding.offsetTop + 25;
      console.log(a + "jkk");
      if (document.documentElement.scrollTop > a) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    },
  },
};
</script>

<style scoped>
#card {
  width: 800px;
  height: 2200px;
}
.header {
  background: aquamarine;
  margin: 11px;
  border: 3px solid blue;
  padding: 1px;
}

.father {
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 5px solid rgb(42, 38, 38);
  background-color: rgb(248, 250, 114);
  margin-left: 2px;
}
.son {
  width: 90px;
  height: 50px;
  background: rgb(77, 192, 221);
  margin-left: 3px;
  border: 2px solid blue;
}
.bgG {
  height: 50px;
  background: rgb(184, 226, 32);
  border: 2px solid blue;
  margin-left: 6px;
  margin-top: 7px;
}
.bgY {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(236, 240, 27);
}
</style>
