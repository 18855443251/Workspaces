/**
 * 公用组件出口
 */

import svgIcon from './svgIcon'
const install = function (Vue) {
  Vue.component(svgIcon.name, svgIcon)

}

export default {
  install
}