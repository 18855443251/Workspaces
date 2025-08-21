import request from '@/utils/request'
// 查询列表
export function queryLogInfoList(params) {
  return request.get(`brgj/queryLogInfoList`, params);
}