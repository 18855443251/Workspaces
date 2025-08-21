import request from '@/utils/request'
// 查询树形列表
export function queryTreeList(params) {
  return request.get(`small/customer/tree/list`, params);
}
// 搜索查询列表
export function queryPageList(params) {
  return request.get(`small/customer/page/list`, params);
}
// 查询地址详情
export function queryDetail(params) {
  return request.get(`small/customer/detail`, params);
}
// 查询⽹格分⻚列表
export function queryGridPageList(params) {
  return request.get(`small/customer/grid/page/list`, params);
}
// 保存地址信息
export function submitSave(params) {
  return request.post(`small/customer/save`, params);
}
// 获取工号
export function encrypt(params) {
  return request.post(`encrypt`, params, {
    proxy: process.env.VUE_APP_BASE_LOGIN,
  });
}
export function decrypt(params) {
  return request.post(`decrypt`, params, {
    proxy: process.env.VUE_APP_BASE_LOGIN,
  });
}