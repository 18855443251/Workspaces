
const baseUtils = {
  getBaseUrl() {
    const href = window.location.href
    if (href.indexOf('#') > 0) {
      return href.substr(0, href.indexOf('#') + 2)
    }
    return window.location.hostname + window.location.port
  },
  isEmpty(str) {
    if (str == null || typeof str == 'undefined' || str == '') {
      return true
    } else {
      return false
    }
  },
}

const install = function(Vue) {
  Vue.prototype.$utils = baseUtils
}

export default { install }
