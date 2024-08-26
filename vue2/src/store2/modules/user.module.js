const getDefaultState = () => {
  return {
    name: "张三",
    lockNum: 20,
    logoutNum: 30,
    nowMenuId: sessionStorage.getItem("nowMenuId")
      ? sessionStorage.getItem("nowMenuId")
      : null, // 当前顶级菜单menuId,
    count: 1,
    age: "18",
    cityObj: { name: "海口" },
  };
};
// state是一个用来存储数据状态的集合
const state = getDefaultState();

// mutations是一个用于改变state状态的方法的对象集合，它只能包含同步操作
const mutations = {
  // 重置状态
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  // 锁屏
  SET_LOCK_NUM: (state, lockNum) => {
    state.lockNum = lockNum;
  },
  // 登出时间
  SET_LOGOUT_NUM: (state, logoutNum) => {
    state.logoutNum = logoutNum;
  },
  // 设置名字
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_NOW_MENUID: (state, menuId) => {
    sessionStorage.setItem("nowMenuId", menuId);
    state.nowMenuId = menuId;
  },
  INC_NUM: (state) => {
    state.count--;
  },
  ADD_NUM: (state,val) => {
    state.count+= val;
  },
};
// this.$store.dispatch是VueX框架中用来触发actions的方法
// actions是一个用于提交mutations的方法的对象集合，它可以包含任意异步操作
const actions = {
  resetState({ commit }) {
    commit("RESET_STATE");
  },
  // 提交lockNum
  setLockNum({ commit }, lockNum) {
    commit("SET_LOCK_NUM", lockNum);
  },
  // 提交logoutNum
  setLogoutNum({ commit }, logoutNum) {
    commit("SET_LOGOUT_NUM", logoutNum);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
