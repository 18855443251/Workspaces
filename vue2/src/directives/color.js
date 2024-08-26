import Vue from "vue";

Vue.directive("color", {
  // 1. inserted 提供的是元素被添加到页面中时的逻辑
  inserted(el, binding) {
    // console.log(el, binding.value);
    // binding.value 就是指令的值
    // el 原生的dom对象
    el.style.color = binding.value;
  },
  // 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
  update(el, binding) {
    console.log("指令的值修改了");
    el.style.color = binding.value;
  },
});
