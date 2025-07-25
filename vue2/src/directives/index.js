import focus from "./focus";
import color from "./color";
import input from "./input";
import loaddash from "./loaddash";
const directives = {
  focus,
  color,
  input,
  loaddash
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
