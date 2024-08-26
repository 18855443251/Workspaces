// import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters";
import mixins from "./utils/mixins";

// 公共样式
// import './assets/common.css';
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// register global mixins.
Vue.mixin(mixins);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

new Vue(Vue.util.extend({
  el: "#root",
  router,
  store
}, App));

// router.push("/");

let indexRouter;
let params = {};
let matchList = weex.config.bundleUrl.match(/\w*Page=(\w*)(&(\w*)=(\w*))*$/);

if (matchList) {
  indexRouter = matchList[1];
  if (matchList[3] && matchList[3] === "url") params.url = matchList[4];
  router.push({
    name: indexRouter,
    params
  });
} else {
  indexRouter = "/";
  router.push(indexRouter);
}