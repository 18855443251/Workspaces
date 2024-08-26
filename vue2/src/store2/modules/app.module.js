const state = {
  device: "desktop",
  sidebar: {
    opened: true,
    show: true,
  },
  bankList: [
    {
      id: "01102",
      pId: "9999",
      name: "省联社",
      NcsId: "",
      BankSeq: "",
      GrandFatherID: "9999",
      GrandFatherName: "e百福",
    },
  ],
};

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIDEBARSHOW: (state, ss) => {
    if (ss) {
      ss == "1" ? (state.sidebar.show = true) : (state.sidebar.show = false);
    } else {
      state.sidebar.show = !state.sidebar.show;
      console.log(state.sidebar.show, "拒绝");
    }
  },
};

const actions = {
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
  sidebarStatusShow({ commit }, ss) {
    commit("SET_SIDEBARSHOW", ss);
  },
};
// 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
// export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。一个文件内不能有多个export default。
// 1、export与export default均可用于导出常量、函数、文件、模块等
// 2、在一个文件或模块中，export、import可以有多个，export default仅有一个
// 3、通过export方式导出，在导入时要加{ }，export default则不需要，并可以起任意名称
// (1) 输出单个值，使用export default
// (2) 输出多个值，使用export
// (3) export default与普通的export不要同时使用

export default {
  name: "app",
  namespaced: true,
  state,
  mutations,
  actions,
};
