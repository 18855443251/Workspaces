import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router' // 确保路径正确
// import './plugins/vant'
import components from './components'
import filters from '@/filters'
import mixins from "@/mixins";
import '@/assets/styles/icons/fulldesign_icons.css';
import '@/assets/styles/fonts/font.css'
// import '@/assets/icons'
import { Table, Pagination, ConfigProvider } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
Vue.use(Table)
Vue.use(Pagination)
Vue.use(ConfigProvider)

// 注册过滤器
Object.keys(filters).forEach((k) => {
  Vue.filter(k, filters[k])
})
// 注册全局控件
Vue.use(components)
Vue.mixin(mixins);
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext)
requireAll(req)

const EventBus = new Vue()
Vue.prototype.$bus = EventBus
Vue.prototype.$zhCN = zhCN
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')