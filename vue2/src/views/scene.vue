<!--
 * @Author: your name
 * @Date: 2021-08-11 17:22:56
 * @LastEditTime: 2021-09-08 11:15:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\scene.vue
-->
<template>
  <div>
    <div @click="test">Alert</div>
    <div @click="test1">Alert</div>
    <div @click="test2">Alert</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.launchStage(
      "main.questionAnswer?data=" + JSON.stringify(params),
      () => {
        //  要做的处理
      }
    );
  },
  methods: {
    //顺序:weexA(跳场景按钮launchStage)->weexB(跳场景按钮launchStage)->weexC(跳场景按钮launchStage)->weexD(注:四个都是this.$route.path === this.$router.indexRouter)
    //逆序:weexD(结束场景按钮finish)->weexC(结束场景按钮finish)->weexB(结束场景按钮finish)->weexA(结束场景按钮finish)->桌面
    //逆序:weexD(返回结束场景finish)->weexC(返回结束场景finish)->weexB(返回结束场景finish)->weexA(返回结束场景finish)->桌面
    //顺序:weexA(跳路由按钮)->weexB(跳路由按钮)->weexC(跳场景按钮launchStage)->weexD(注:weexA和weexD是this.$route.path === this.$router.indexRouter)
    //逆序:weexD(结束场景按钮finish)->weexC(结束场景按钮finish)->桌面
    //逆序:weexD(返回结束场景finish)->weexC(返回结束路由)->weexB(返回结束路由) ->weexA(返回结束场景finish)->桌面
    //顺序:weexA(跳路由)->weexB(跳路由)->weexC>(跳场景launchStage并且this.$router.go(-2))->weexD(注:weexA和weexD是this.$route.path === this.$router.indexRouter)
    //逆序:weexD(结束场景按钮finish)->weexA(结束场景按钮finish)-->桌面
    //逆序:weexD(返回结束场景finish)->weexA(返回结束场景finish)-->桌面
    //顺序:weexA(跳场景replaceStage)->weexB(跳路由)->weexC>(跳场景launchStage)->weexD(注:weexA、weexB、weexD是this.$route.path === this.$router.indexRouter)
    //逆序:weexD(结束场景按钮finish)->weexC(结束场景按钮finish)->桌面
    //逆序:weexD(返回结束场景finish)->weexC(返回结束路由)->weexB(返回结束场景finish)->桌面
    //顺序:weexA(跳场景launchStage)->vueB(跳场景launchStage)->weexC(跳场景launchStage)(注:三个都是this.$route.path === this.$router.indexRouter)
    //逆序:weexC(返回结束场景finish)->vueB(返回结束场景finish)->weexA(返回结束场景finish)->桌面
    //顺序:weexA(跳路由)->weexB(跳场景launchStage并在weexB按钮赋值)->weexC(跳场景launchStage)->weexD
    //逆序:weexD(结束场景按钮finish并且created没有状态存储)->weexC(结束场景按钮finish并且created没有状态存储)->weexB(结束场景按钮finish并且created没有状态存储)->weexA(结束场景按钮finish并且created没有状态存储)->桌面
    //逆序:weexD(返回结束场景finish并且created没有状态存储)->weexC(返回结束场景finish并且created没有状态存储)->weexB(返回结束场景finish并且created没有状态存储)->weexA(返回结束路由并且created有状态存储)->桌面
    //顺序:weexA(跳场景launchStage)->weexB(跳场景launchStage并在weexB按钮赋值)->weexC(跳场景launchStage)->weexD
    //逆序:weexD(结束场景按钮finish并且created没有状态存储)->weexC(结束场景按钮finish并且created没有状态存储)->weexB(结束场景按钮finish并且created没有状态存储)->weexA(结束场景按钮finish并且created没有状态存储)->桌面
    //逆序:weexD(返回结束场景finish并且created没有状态存储)->weexC(返回结束场景finish并且created没有状态存储)->weexB(返回结束场景finish并且created没有状态存储)->weexA(返回结束场景finish并且created没有状态存储)->桌面
    //顺序:weexA(跳场景launchStage)->weexB(跳路由并在weexB按钮赋值)->weexC(跳路由并且created有状态存储)->weexD(跳场景created有状态存储) (注weexA是this.$route.path === this.$router.indexRouter)
    //逆序:weexD(结束场景按钮finish)->weexA(结束场景按钮finish并且created没有状态存储)->桌面
    //逆序:weexD(返回结束路由)->weexC(返回结束路由并且created有状态存储)->weexB(返回结束路由并且created有状态存储)->weexA(返回结束场景finish并且created没有状态存储)->桌面
    //场景跳转会进入created,mounted,结束场景不会走created,mounted
    //路由跳转会进入created,mounted,路由返回this.$router.back()也会进入created,mounted
    //杀进程就没有：context.sessionSetString();
    //杀进程还有，单独清缓存还有，清除数据就没有：context.secureGetString()
  },
};
</script>


