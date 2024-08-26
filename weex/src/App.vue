<!--
 * @Author: your name
 * @Date: 2022-06-29 10:11:43
 * @LastEditTime: 2022-07-04 16:20:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weex\src\App.vue
-->
<template>
  <div @clickbackitem="goBack" @viewappear="viewappear">
    <router-view style="flex:1;" class="router-view"></router-view>
    <the-Mask :show="$store.state.overLayShow"></the-Mask>
    <!-- <alertDialog
      :isShow="$store.state.isShowAlert"
      :message="$store.state.message"
      @clickSecondBtn="clickSecondBtn"
    />-->
  </div>
</template>

<script>
const context = weex.requireModule("context");
import TheMask from "@/components/theMask.vue";
const domModule = weex.requireModule("dom");
// import alertDialog from "@/components/alertDialog";
export default {
  components: {
    TheMask,
    // alertDialog,
  },
  data() {
    return {
      isShow: false,
      isShowAlert: false,
      firstBtnText: "确定",
    };
  },
  beforeCreate() {
    domModule.addRule("fontFace", {
      fontFamily: "Objectivity",
      src: `url('local://${
        WXEnvironment.platform.toLowerCase() == "android" ? "/fonts/" : ""
      }objectivity-medium-8.otf')`,
    });
  },
  created() {
    // let themeChannel = new BroadcastChannel("switchTheme");
    // themeChannel.onmessage((theme) => {
    //   this.$store.commit("switchTheme", { theme, reSend: false });
    // });
    this.getTabbarHeight();
  },
  // mounted() {
  //   // 登录人信息,登录后才有的信息
  //   if (
  //     context.sessionGetString("loginInfo") &&
  //     context.sessionGetString("loginInfo") != ""
  //   ) {
  //     this.$store.state.userInfo = JSON.parse(
  //       context.sessionGetString("loginInfo")
  //     ).user;
  //   }
  // },
  methods: {
    clickSecondBtn() {
      this.$store.state.isShowAlert = false;
    },
    cancelBtn() {
      this.$store.state.isShowLogin = false;
    },
    viewappear() {
      if (context.sessionGetString("fineflag") == "fineflag") {
        this.$store.state.launchChangeFlag++;
      } else if (context.sessionGetString("normflag") == "normflag") {
        this.$store.state.launchnNormFlag++;
      } else if (this.$route.path == "/login") {
        this.$store.state.loginFlag++;
      }
    },
  },
};
</script>
<style scoped>
</style>