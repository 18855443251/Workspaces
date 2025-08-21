import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
export const EventBus = new Vue();
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
  },
  getters,
})
