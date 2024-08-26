/*
 * @Author: your name
 * @Date: 2021-11-03 18:52:19
 * @LastEditTime: 2021-11-04 16:28:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bank\src\utils\axios\interface.js
 */
import {
  $axios,
  fetchErrorhandling
} from './api' // 导入 api

export default {
  get(url, params = {}, customErrorHandling = false) {
    return $axios({
      url,
      method: 'get',
      params,
      customErrorHandling,
    })
  },
  /**
   * @param {string} url 交易
   * @param {object} data 参数
   * @param {boolean} customErrorHandling true表示不需要报错弹框
   * @param {boolean} disableOverLayShow  true表示不需要loadding
   * @param {number} timeout 超时时间
   */
  post(url, data = {}, {
    customErrorHandling,
    disableOverLayShow,
    timeout
  } = {
    customErrorHandling: false,
    disableOverLayShow: false,
    timeout: 180000
  }) {
    return $axios({
      url,
      method: 'post',
      data: data,
      customErrorHandling,
      disableOverLayShow,
      timeout: isNaN(timeout) || !/[\d]/g.test(timeout) ? "180000" : Number(timeout),
    })
  },
  fetchErrorhandling(data) {
    return fetchErrorhandling(data)
  },
}