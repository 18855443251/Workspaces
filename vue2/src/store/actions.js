// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// Action 通过 store.dispatch 方法触发：
// action 内部执行异步操作：
// 异步逻辑都应该封装到 action 里面。
export default {
  resetState({ commit }) {
    commit("RESET_STATE");
  },
  // 提交lockNum
  setLockNum(context1, lockNum) {
    // console.log(context1,'哈哈哈')
    context1.commit("SET_LOCK_NUM", lockNum);
  },
  // setLockNum(context, lockNum) {
  //   setTimeout(() => {
  //     context.commit("SET_LOCK_NUM", lockNum);
  //   }, 1000);
  // },
  // 提交logoutNum
  setLogoutNum({ commit }, logoutNum) {
    commit("SET_LOGOUT_NUM", logoutNum);
  },
  actionA({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("someMutation");
        resolve();
      }, 5000);
    });
  },
  actionB({ dispatch, commit }) {
    return dispatch("actionA").then(() => {
      commit("someOtherMutation");
    });
  },
};
