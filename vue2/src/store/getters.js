import ThemeJson from "@/json/theme.json";
import state from "./state";
export default {
  themeStyle() {
    return ThemeJson[state.theme];
  },
  lockNum: (state) => state.user.lockNum,
  logoutNum: (state) => state.user.logoutNum,
  name: (state) => state.user.name,
  // age: state => state.user.age,
  cityObj: (state) => state.user.cityObj,
  age: (state) => {
    return state.user.age;
  },
  // 注意：
  // (1) getters函数的第一个参数是 state
  // (2) getters函数必须要有返回值
  filterList(state) {
    return state.list.filter((item) => item > 5);
  },
  getList(state,getters){
    return getters.filterList.length
  }
};
