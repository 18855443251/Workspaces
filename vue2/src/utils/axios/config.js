/*
 * @Author: 洪丽云
 * @Date: 2021-03-29 16:54:31
 * @LastEditTime: 2021-05-27 17:00:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \src\utils\axios\config.js
 */
export default {
  // 基础url前缀
  baseURL: 'api',
  // `headers` 是即将被发送的自定义请求头
  headers: {
    'X-Requestedtest-Withtest': 'XMLHttpRequesttest',
    'mchannelIdtest': '56886',
    appkey: "app",
  },
  // 设置超时时间
  timeout: 180000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的
}