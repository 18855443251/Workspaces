import Vue from "vue";
// 如果 insert 和update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式：
Vue.directive("input", function (el, binding) {
  const specialSymbol =
    /[`~!@#$%^&*()+=|{}':;',/\/\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]/;
  el.addEventListener("input", ($event) => {
    $event.target.value = $event.target.value.replace(specialSymbol, "");
    // 使用 Vue.nextTick 确保 DOM 更新完成
    Vue.nextTick(() => {
      binding.value(el.value);
    });
  });
});
