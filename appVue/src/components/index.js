/**
 * 公用组件出口
 */
import MyTitle from './my-title'
import MyLoading from './my-loading'
import myCard from './my-card'
import myInfo from './my-info'
import myPage from './my-page'
import svgIcon from './svg-icon'
import './autoHeader.js'
const install = function (Vue) {
  Vue.component(MyTitle.name, MyTitle)
  Vue.component(MyLoading.name, MyLoading)
  Vue.component(myCard.name, myCard)
  Vue.component(myInfo.name, myInfo)
  Vue.component(myPage.name, myPage)
  Vue.component(svgIcon.name, svgIcon)
}

export default {
  install
}