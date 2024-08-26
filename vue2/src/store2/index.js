import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

// 自动加载当前目录下所有 *.module.js 或者 *.module.ts 文件
// 配置请参考 modules 目录下示例
const loadAllModule = ctx => {
  const modules = {}
  ctx.keys().forEach(item => {
    const module = ctx(item).default
    if (Object.prototype.hasOwnProperty.call(module, 'name')) {
      modules[module.name] = module
    } else {
      modules[item.replace(/\.\/(\S+?)\.module\.[jt]s$/, '$1')] = module
    }
  })
  return modules
}

const modules = loadAllModule(
  require.context('./modules', true, /module\.[tj]s$/)
)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  getters
})

export default store
