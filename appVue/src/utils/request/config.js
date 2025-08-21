export default {
  // 基础url前缀
  baseURL: process.env.VUE_APP_BASE_API_URL,
  // `headers` 是即将被发送的自定义请求头
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json, text/plain, */*",
  },
  // 设置超时时间
  timeout: 180000,
  withCredentials: false, // 表示跨域请求时是否需要使用凭证 默认的
  responseType: 'json', // 默认的
}