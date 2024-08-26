import Vue from "vue";
Vue.directive("loading", {
  inserted(el) {
    el.focus();
  },
});
