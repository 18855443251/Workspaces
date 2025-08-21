import {
  $axios,
} from './api' // 导入 api
export default {
  /**
   * @param {string} url 交易
   * @param {object} data 参数
   * @param {string} proxy 接口前缀
   * @param {string} loadingIcon loading图标
   * @param {boolean} closeLoading  true表示不需要loadding
   * @param {boolean} customErrorHandling 自定义错误处理
   * @param {number} timeout 超时时间
   */
  post(url, data = {}, {
    proxy,
    loadingIcon,
    closeLoading,
    customErrorHandling,
    timeout,
  } = {
    proxy: '',
    loadingIcon: '',
    closeLoading: false,
    customErrorHandling: false,
    timeout: 100000,
  }) {
    return $axios({
      url,
      method: 'post',
      data,
      proxy,
      loadingIcon,
      closeLoading,
      customErrorHandling,
      timeout: isNaN(timeout) || !/[\d]/g.test(timeout) ? "100000" : Number(timeout),
    })
  },
  /**
   * @param {string} url 交易
   * @param {object} data 参数
   * @param {string} proxy 接口前缀
   * @param {string} loadingIcon loading图标
   * @param {boolean} closeLoading  true表示不需要loadding
   * @param {boolean} customErrorHandling 自定义错误处理
   * @param {number} timeout 超时时间
   */
  get(url, params = {}, {
    proxy,
    loadingIcon,
    closeLoading,
    customErrorHandling,
    timeout,
  } = {
    proxy: '',
    loadingIcon: '',
    closeLoading: false,
    customErrorHandling: false,
    timeout: 100000,
  }) {
    return $axios({
      url,
      method: 'get',
      params,
      proxy,
      loadingIcon,
      closeLoading,
      customErrorHandling,
      timeout: isNaN(timeout) || !/[\d]/g.test(timeout) ? "100000" : Number(timeout),
    })
  },
}