import focus from "./focus";
import color from "./color";
import input from "./input";
const directives = {
  focus,
  color,
  input,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
