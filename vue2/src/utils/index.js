const PLUGIN_V_EDITOR = '$utils'
export default {
  install (Vue, options) {
    window._UTILS = options
    Vue.prototype[PLUGIN_V_EDITOR] = options
  }
}
