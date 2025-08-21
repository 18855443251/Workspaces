import request from '@/utils/request'
// 查询列表
export function queryLogInfoList(params) {
  return request.get(`brgj/queryLogInfoList`, params);
}
//市县列表查询
export function queryBranchList(params) {
  return request.get(`grid/queryBranchList`, params);
}
//操作类型列表查询
export function queryOperationTypeList(params) {
  return request.get(`attrSpec/queryOperationTypeList`, params);
}

