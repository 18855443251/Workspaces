<template>
  <div>
    <div class="channel-menu">
      <div class="tabs">
        <!-- 很宽的盒子 -->
        <div class="tabs-list">
          <a href="#">首页</a>
          <a href="#">动画</a>
          <a href="#">番剧</a>
          <a href="#">果蔬</a>
          <a href="#">音乐</a>
          <a href="#">舞蹈</a>
          <a href="#">鬼畜</a>
          <a href="#">吹鬼</a>
          <!-- 红色线 -->
          <div class="line"></div>
        </div>
      </div>
      <div class="after">
        <i class="iconfont general_pulldown_s"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.getCountTime();
    // setInterval(() => {
    //   this.getCountTime();
    // }, 1000);
    // 1. 事件委托的方法 获取父元素 tabs-list
    const list = document.querySelector(".tabs-list");
    const line = document.querySelector(".line");
    // 2. 注册点击事件
    list.addEventListener("click", function (e) {
      // 只有点击了A 才有触发效果
      if (e.target.tagName === "A") {
        // console.log(11)
        // 当前元素是谁 ？  e.target
        // 得到当前点击元素的位置
        // console.log(e.target.offsetLeft)
        // line.style.transform = 'translateX(100px)'
        // 把我们点击的a链接盒子的位置  然后移动
        line.style.transform = `translateX(${e.target.offsetLeft}px)`;
      }
    });
  },
  methods: {},
};
</script>

<style scoped>
.channel-menu {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10.66666667vw;
  border-bottom: 1px solid #e7e7e7;
}
.channel-menu .tabs {
  overflow: hidden;
  flex: 1;
}
.channel-menu .tabs .tabs-list {
  display: flex;
}
.channel-menu .tabs .tabs-list a {
  padding: 0 4.26666667vw;
  white-space: nowrap;
  font-size: 3.73333333vw;
  height: 10.66666667vw;
  line-height: 10.66666667vw;
}
.channel-menu .tabs .tabs-list .line {
  position: absolute;
  left: 4.26666667vw;
  bottom: 0;
  width: 7.46666667vw;
  height: 0.53333333vw;
  background-color: #fb7299;
  transition: all 0.3s;
}
</style>
