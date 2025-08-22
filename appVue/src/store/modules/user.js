const state = {
  isShowLoading: false, //遮罩
  loadingIcon: '',//loading图标
  staffAccount:''
}

const mutations = {
  // 遮罩展示
  setLoading(state, value) {
    state.isShowLoading = value
  },
  // loading图标
  setLoadingIcon(state, value) {
    state.loadingIcon = value
  }
}

const actions = {}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}