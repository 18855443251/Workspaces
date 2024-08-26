import Vue from "vue";
Vue.directive("loading", {
  inserted(el, binding) {
    binding.value
      ? el.classList.add("loading")
      : el.classList.remove("loading");
  },
  update(el, binding) {
    binding.value
      ? el.classList.add("loading")
      : el.classList.remove("loading");
  },
});
