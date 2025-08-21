import axios from 'axios'
import $store from '@/store'
import config from './config.js'
import {
  Toast
} from 'vant'
let reqNum = 0 // 请求次数
export function $axios(options) {
  return new Promise((resolve, reject) => {
    // const json = require('@/mock/' + options.url + '.json')
    // resolve(json)
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.token = token;
    }
    const instance = axios.create(Object.assign({}, config, options.proxy ? {
      baseURL: options.proxy,
    } : {}))
    instance.interceptors.request.use(
      (request) => {
        // 替换loading图标
        if (options.loadingIcon) {
          $store.commit('user/setLoadingIcon', options.loadingIcon)
        }
        if (!options.closeLoading) {
          if (reqNum == 0) {
            $store.commit('user/setLoading', true)
          }
          reqNum++
        }
        return request
      },
      (err) => {
        $store.commit('user/setLoading', false)
        return Promise.reject(err)
      }
    )
    // response 拦截器
    instance.interceptors.response.use(
      (response) => {
        if (!options.closeLoading) {
          reqNum--
          if (reqNum == 0) {
            $store.commit('user/setLoading', false)
          }
        }
        let data
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = response.request.responseText
        } else {
          data = response.data
        }
        return data
      },
      (err) => {
        if (!options.closeLoading) {
          reqNum--
          if (reqNum == 0) {
            $store.commit('user/setLoading', false)
          }
        }
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时，请稍后再试'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '网路状态异常，请稍后再试'
              break

            case 504:
              err.message = '网路状态异常，请稍后再试'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
              err.message = `网路状态异常，请稍后再试`
          }
        }
        if (!options.customErrorHandling) {
          Toast(err.message)
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )
    // 请求处理
    instance(options)
      .then((response) => {
        resolve(response)
        // let customErrorHandling = options.customErrorHandling
        // if (response.status == '00000000') {
        //   resolve(response)
        // } else if (customErrorHandling) {
        //   reject(response)
        // } else {
        //   fetchErrorhandling(response)
        //   reject(response)
        // }
      })
      .catch((error) => {
        if (options.customErrorHandling) {
          reject(error)
        }
      })
  })
}
//错误处理
export function fetchErrorhandling(data) {
  if (data.status == "402") {
    // Alert("登录超时，请重新登录", () => {
    //   window.context && context.launchStage("main.transitionPage")
    // })
  }
}