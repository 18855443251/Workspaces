<template>
  <div @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
    <transition :name="transitionName">
      <!-- :include="['home', 'lifeCycle1']" -->
      <keep-alive :include="$store.state.keepAlive">
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <!-- <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition> -->
    <!-- <mp-mask :show="$store.state.overLayShow"></mp-mask> -->
  </div>
</template>

<script>
import MpMask from "@/components/mp-mask";
export default {
  name: "App",
  components: {
    MpMask,
  },
  computed: {
    isIosMoveBack() {
      return this.$store.state.isIosMoveBack;
    },
  },
  data() {
    return {
      transitionName: "",
      startPositionX: 0,
      startPositionY: 0,
    };
  },
  //监听路由变化
  // watch: {
  //   $route(to, from) {
  //     //判断是否为ios
  //     if (this.isIosMoveBack) {
  //       this.transitionName = "";
  //       this.$store.commit("setIsIosMoveBack", false);
  //     } else {
  //       //如果to索引大于from索引，判断为前进状态，反之则为后退
  //       if (this.$store.state.history.length == 1 || to.path == "/ckDetail") {
  //         //进入初始页面时不需要动画效果
  //         this.transitionName = "";
  //       } else {
  //         if (
  //           this.$store.state.history.indexOf(to.path) >
  //           this.$store.state.history.indexOf(from.path)
  //         ) {
  //           this.transitionName = "slide-left";
  //         } else {
  //           this.transitionName = "slide-right";
  //         }
  //       }
  //     }
  //   },
  // },
  mounted() {
    // let a = document.querySelectorAll("input");
    // for (let i = 0; i < a.length; i++) {
    //   window.addEventListener("input", ($evet) => {
    //     const specialSymbol =
    //       /[`~!@#$%^&*()+=|{}':;',/\/\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]/;
    //     const hasSymbol = specialSymbol.test($evet.target.value);
    //     $evet.target.value = $evet.target.value.replace(specialSymbol, "");
    //     console.log($evet.target.value);
    //   });
    // }

    window.onhashchange = () => {
      // console.log(location.hash, "路由");
    };
    // 登录人信息,登录后才有的信息
    // if (context.sessionGetString("loginInfo")) {
    //   this.$store.state.userInfo = JSON.parse(
    //     context.sessionGetString("loginInfo")
    //   ).user;
    //   this.$store.state.deviceInfimation = JSON.parse(
    //     context.sessionGetString("deviceInfimation")
    //   );
    // }
    //监听滑动事件改变变量isIosMoveBack值
    // if (this.isIOS()) {
    //   document.body.addEventListener(
    //     "touchmove",
    //     () => {
    //       this.$store.commit("setIsIosMoveBack", true);
    //     },
    //     false
    //   );
    // }
    // 2. 监听物理返回键点击,传true,由我们自己处理
    window.context && context.handleBack(true);
    window.addEventListener("clickbackitem", this.goBack, true);
  },
  methods: {
    // iOS右滑返回（偏移距离小于30 && iOS && 第一个页面(统一右滑返回)）
    slideRight() {
      if (
        this.startPositionX < 30 &&
        this.isIOS()
        //&& this.$route.path == this.$router.indexRouter
      ) {
        console.log("back");
        this.goBack();
      }
    },
    touchstart(e) {
      this.startPositionX = e.changedTouches[0].clientX;
      this.startPositionY = e.changedTouches[0].clientY;
    },
    touchmove(e) {
      // this.startPosition = e.changedTouches[0].clientX;
    },
    touchend(e) {
      let endPositionX = e.changedTouches[0].clientX;
      let endPositionY = e.changedTouches[0].clientY;

      let offsetX = endPositionX - this.startPositionX;
      let offsetY = endPositionY - this.startPositionY;

      if (offsetX > 100 && Math.abs(offsetY) < offsetX) {
        this.slideRight();
      }
    },
  },
};
</script>

<style scoped>
.router-view {
  padding-top: 160px;
  width: 750px;
  min-height: 100vh;
  /* background-color: rgb(248, 248, 248); */
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: absolute;
}
.slide-right-leave-to,
.slide-left-leave-to {
  display: none;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
