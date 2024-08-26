/*
 * @Author: your name
 * @Date: 2022-03-19 15:09:25
 * @LastEditTime: 2022-06-29 10:52:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import home from "@/views/home";
import VxMobile from "@/views/VxMobile";
import $store from "@/store";
import routerJump from "@/views/routerJump";
import all from "@/views/all";
import star from "@/views/star";
import answer from "@/views/answer";
import dioAlert from "@/views/dioAlert";
import test180 from "@/views/test180";
import legalRisk from "@/views/legalRisk/legalRisk";
import error from "@/views/error";
// 关键字
import filter from "@/views/pipei/filter";

// 银行卡号，数字过滤
import formatNum from "@/views/num/formatNum";

// 金额处理
import formatMoney from "@/views/money/formatMoney";

// 三目运算
import calculation1 from "@/views/calculation/calculation1";
// 匹配图片
import pipeiImg from "@/views/imgDeal/pipeiImg";
import daoruImg from "@/views/imgDeal/daoruImg";

// 数据格式的取和用
import useData1 from "@/views/useData/useData1";

// import swiper3 from "@/views/lunbotu/swiper3";
import searchAll from "@/views/search/searchAll";
import tankuan from "@/views/tankuan";
import banner from "@/views/banner";
import guide from "@/views/guide"; //引导页
import watch from "@/views/watch/watch"; //引导页
import watch1 from "@/views/watch/watch1"; //引导页
import watch2 from "@/views/watch/watch2"; //引导页
import watch3 from "@/views/watch/watch3"; //引导页
import test from "@/views/test";
import test1 from "@/views/test1";
import typeof1 from "@/views/typeof1";
import creditSituation from "@/views/creditSituation/creditSituation"; //引导页
import message from "@/views/messageManage/message";
import style from "./style.js";
import reg from "./reg.js";
import swiper from "./swiper.js";
import string from "./string.js";
import date from "./date.js";
import json from "./json.js";
import paixu from "./paixu.js";
import fenye from "./fenye.js";
import shijian from "./shijian.js";
import bom from "./bom.js";
import obj from "./obj.js";
import arr from "./arr.js";
import css from "./css.js";
import table from "./table.js";
import slot from "./slot.js";
import promise from "./promise.js";
import timeout from "./timeout.js";
import axios from "./axios.js";
import es6 from "./es6.js";
import zujian from "./zujian.js";
import storage from "./storage.js";
import html from "./html.js";
import example from "./example.js";
import animation from "./animation.js";
import dom from "./dom.js";
import lifeCycle from "./lifeCycle.js";
import router1 from "./router.js";
import store from "./store.js";
import mixins from "./mixins.js";
import jilei from "./jilei.js";
import secondRouter from "./secondRouter.js";
import directives1 from "./directives1.js";
import fileDown from "./fileDown.js";
const routes = [
  {
    path: "/home",
    name: "home",
    component: home,
    meta: {
      keepAlive: true, // 需要缓存
    },
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/test1",
    name: "test1",
    component: test1,
  },
  {
    path: "/star",
    name: "star",
    component: star,
  },
  {
    path: "/routerJump",
    name: "routerJump",
    component: routerJump,
  },
  {
    path: "/dioAlert",
    name: "dioAlert",
    component: dioAlert,
  },
  {
    path: "/filter",
    name: "filter",
    component: filter,
  },
  {
    path: "/answer",
    name: "answer",
    component: answer,
  },
  {
    path: "/formatNum",
    name: "formatNum",
    component: formatNum,
  },
  {
    path: "/formatMoney",
    name: "formatMoney",
    component: formatMoney,
  },
  {
    path: "/calculation1",
    name: "calculation1",
    component: calculation1,
  },
  {
    path: "/daoruImg",
    name: "daoruImg",
    component: daoruImg,
  },
  {
    path: "/pipeiImg",
    name: "pipeiImg",
    component: pipeiImg,
  },
  {
    path: "/useData1",
    name: "useData1",
    component: useData1,
  },
  {
    path: "/all",
    name: "all",
    component: all,
  },
  {
    path: "/searchAll",
    name: "searchAll",
    component: searchAll,
  },
  {
    path: "/tankuan",
    name: "tankuan",
    component: tankuan,
  },
  {
    path: "/test180",
    name: "test180",
    component: test180,
  },
  {
    path: "/legalRisk",
    name: "legalRisk",
    component: legalRisk,
  },

  {
    path: "/banner",
    name: "banner",
    component: banner,
  },
  {
    path: "/guide",
    name: "guide",
    component: guide,
  },
  {
    path: "/creditSituation",
    name: "creditSituation",
    component: creditSituation,
  },
  {
    path: "/VxMobile",
    name: "VxMobile",
    component: VxMobile,
  },
  {
    path: "/message",
    name: "message",
    component: message,
  },
  {
    path: "/watch",
    name: "watch",
    component: watch,
  },
  {
    path: "/watch1",
    name: "watch1",
    component: watch1,
  },
  {
    path: "/watch2",
    name: "watch2",
    component: watch2,
  },
  {
    path: "/watch3",
    name: "watch3",
    component: watch3,
  },
  {
    path: "/typeof1",
    name: "typeof1",
    component: typeof1,
  },

  {
    path: "/",
    redirect: "/home",
  },
  ...style,
  ...reg,
  ...swiper,
  ...string,
  ...date,
  ...json,
  ...paixu,
  ...fenye,
  ...shijian,
  ...bom,
  ...obj,
  ...arr,
  ...css,
  ...table,
  ...slot,
  ...promise,
  ...timeout,
  ...axios,
  ...es6,
  ...zujian,
  ...storage,
  ...html,
  ...example,
  ...animation,
  ...dom,
  ...lifeCycle,
  ...router1,
  ...store,
  ...mixins,
  ...jilei,
  ...secondRouter,
  ...directives1,
  ...fileDown,
  // ...table
  {
    path: "*",
    component: error,
  },
];
const router = new VueRouter({
  // mode:'history',
  routes,
});
// router.beforeEach((to, from, next) => {
//   // 跳转router1的时候判断满足条件直接跳转登录
//   // let a = to.matched.some((item) => {
//   //   return item.path == "/router1";
//   // });
//   console.log(to.matched, "matched");
//   let a = to.meta.isLogin;
//   console.log(to.meta, "meta");
//   if (a) {
//     next("/login");
//   } else {
//     next();
//   }
// });
router.afterEach((to, from) => {
  // console.log(to, "to");
  // console.log(from, "from");
});
export default router;
