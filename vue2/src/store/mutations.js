// 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
// mutations的主要作用就是为了修改state的。
import bankNameList from "@/json/bankNameList.js";
export default {
  /**
   * 设置哪些页面需要数据缓存 参数是路由数组
   * 例子：
   * this.$store.commit('SETKEEPALIVE', ['transferPre','transferCfm'])
   */
  SETKEEPALIVE: (state, keepAlive) => {
    // state.keepAlive.push(...keepAlive)
  },
  /**
   * 删除页面的数据缓存
   * 例子：
   * this.$store.commit('DELKEEPALIVE', ['transferSuc'])
   * this.$store.commit('DELKEEPALIVE') 删除全部
   */
  DELKEEPALIVE: (state, keepAlive) => {
    setTimeout(() => {
      if (!keepAlive) {
        state.keepAlive = [];
        return;
      }
      for (let arr of keepAlive) {
        let index = state.keepAlive.indexOf(arr);
        if (index != -1) {
          state.keepAlive.splice(index, 1);
        }
      }
    });
  },
  // 删除当前页面的数据缓存
  DELETELASTALIVE: (state) => {
    state.keepAlive.pop();
  },
  // 记录路由跳转历史
  ADDHISTORY: (state, path) => {
    state.history.push(path);
  },
  // 删除当前页面的路由记录
  DELETELASTHISTORY(state) {
    state.history.pop();
  },
  // 删除全部路由
  DELETEALLHISTORY: (state) => {
    state.history = [];
  },
  // 选择主题
  SWITCHTHEME: (state, { theme }) => {
    state.theme = theme;
  },
  //判断机型
  setIsIosMoveBack(state, param) {
    state.isIosMoveBack = param;
  },
  pushToken(state, paylod) {
    state.cancelTokenArr.push(paylod.cancelToken);
  },
  clearToken({ cancelTokenArr }) {
    cancelTokenArr.forEach((item) => {
      item("请求取消");
    });
    cancelTokenArr = [];
  },
  //银行名称动态匹配logo
  bankNameLogoMate: (state, PayeeBankName) => {
    let BankLogoList = bankNameList.filter((item) => {
      return PayeeBankName && PayeeBankName.match(item.BankName);
    });
    if (BankLogoList.length === 0) {
      state.BankImg = bankNameList[1].BankImg;
    } else {
      state.BankImg = BankLogoList[0].BankImg;
    }
  },
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
    console.log(logoutNum, "还好");
    state.logoutNum = logoutNum;
  },
  // 设置名字
  SET_NAME: (state1, name) => {
    state1.name = name;
  },
  SET_NOW_MENUID: (state, menuId) => {
    sessionStorage.setItem("nowMenuId", menuId);
    state.nowMenuId = menuId;
  },
  INC_NUM: (state) => {
    state.count--;
  },
  ADD_NUM: (state, val) => {
    state.count += val;
  },
  someMutation: (state, val) => {
    state.name = "someMutation";
  },
  someOtherMutation: (state, val) => {
    state.name = "someOtherMutation";
  },
};
