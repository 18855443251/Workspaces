import axios from 'axios'
import $store from '@/store'
import config from './config.js'
import $router from "@/router";
import positionObJ from '@/json/position.js'
import {
  Dialog
} from 'mand-mobile'
let reqNum = 0 // 请求次数
export function $axios(options) {
  return new Promise((resolve, reject) => {
    config.headers.orgNo = $store.state.userInfo.deptcode;
    config.headers.cifName = $store.state.userInfo.empid;
    config.headers.userId = $store.state.userInfo.empid;
    // config.headers.token = context.sessionGetString("token");
    const instance = axios.create(Object.assign({}, config, options.proxy ? {
      baseURL: options.proxy,
    } : {}))

    // request 拦截
    instance.interceptors.request.use(
      (res) => {
        res.cancelToken = new axios.CancelToken((cancel) => {
          $store.commit('pushToken', {
            cancelToken: cancel
          })
        })
        if (!options.disableOverLayShow) {
          if (reqNum == 0) {
            $store.commit('openOverlay')
          }
          reqNum++
        }
        return res
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      (response) => {
        if (!options.disableOverLayShow) {
          reqNum--
          if (reqNum == 0) {
            $store.commit('closeOverlay')
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
        if (!options.disableOverLayShow) {
          reqNum--
          if (reqNum == 0) {
            $store.commit('closeOverlay')
          }
        }
        if (axios.isCancel(err)) {
          //为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会发生提示错误之类的了
          return new Promise(() => {})
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
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options)
      .then((response) => {
        let customErrorHandling = options.customErrorHandling
        if (response.status == '00000000' || (options.proxy && response.status == '0000')) {
          resolve(response)
        } else if (customErrorHandling) {
          reject(response)
        } else {
          fetchErrorhandling(response)
          reject(response)
        }
        return false
      })
      .catch((error) => {
        reject()
        if ($store.state.userInfo.position && positionObJ[$store.state.userInfo.position] && positionObJ[this.$store.state.userInfo.position].includes("行长")) {
          return;
        }
        if (error.code === 'ECONNABORTED') {
          Confirm('请求超时，请稍后再试', () => {
            context.launchStage(
              "main.error?data=" + JSON.stringify(error)
            );
          })
        } else {
          Confirm('请求超时，请稍后再试', () => {
            context.launchStage(
              "main.error?data=" + JSON.stringify(error)
            );
          })
        }
      })
  })
}

//错误处理
export function fetchErrorhandling(data) {
  if (data.status == "402") {
    Alert("登录超时，请重新登录", () => {
      window.context && context.launchStage("main.transitionPage")
    })
    return
  }
  // 待线上配置完竞争力可删除下方判断（$router.indexRouter != '/competitive')）
  if (($store.state.userInfo.position && positionObJ[$store.state.userInfo.position]&& positionObJ[this.$store.state.userInfo.position].includes("行长")) && $router.indexRouter != '/competitive') {
    return;
  }
  if (data.status == "dsb_connect_fail" || data.status == "esb_connect_fail" || data.status == "esb_status_fail") {
    Confirm('网络连接错误', () => {
      context.launchStage(
        "main.error?data=" + JSON.stringify(data)
      );
    })
  } else {
    if (data.msg.indexOf("com") != -1) {
      Confirm('系统繁忙，请稍后再试', () => {
        context.launchStage(
          "main.error?data=" + JSON.stringify(data)
        );
      })
    } else if ($router.indexRouter != '/competitive') {
      Confirm(data.msg.split("|")[0], () => {
        context.launchStage(
          "main.error?data=" + JSON.stringify(data)
        );
      })
    }

  }
}

function Alert(value, callback) {
  let props = {
    onConfirm: () => {
      callback && callback()
    },
  }
  if (typeof value === 'string') {
    props.title = ''
    props.content = value
    props.confirmText = "去登录"
    Dialog.alert(props)
  } else if (typeof value === 'object') {
    props.confirmText = "去登录"
    Object.assign(props, value)
    Dialog.alert(props)
  } else {
    throw new Error('参数需为 [string] 或 [object]')
  }
}

function jump(to, params, flag) {
  if ($router) {
    if (flag) {
      $router.replace({
        name: to.replace(/^\//, ""),
        params: params,
      });
    } else {
      $router.push({
        name: to.replace(/^\//, ""),
        params: params,
      });
    }
  }
}

function Confirm(value, cb) {
  let props = {
    onConfirm: () => {
      if (cb && typeof cb === 'function') {
        cb()
      }
    },
    onShow: () => {
      $store.state.dialogShow = true
    },
    onHide: () => {
      $store.state.dialogShow = false
    },
  }
  if (typeof value === 'string') {
    props.title = ''
    props.content = value
    props.confirmText = "查看"
    Dialog.confirm(props)
  } else if (typeof value === 'object') {
    Object.assign(props, value)
    Dialog.confirm(props)
    props.confirmText = "查看"
  } else {
    throw new Error('参数需为 [string] 或 [object]')
  }
}