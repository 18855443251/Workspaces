import request from "@/utils/request";

//获取登陆信息
export function decrypt(params) {
  // 通过双斜杠或完整域名跳过前缀处理
  return request.post(`//${window.location.host}/auth/decrypt`, params);
  // 或者
  // return request.post(`https://your-domain.com/auth/decrypt`, params);
}

// 获取分局支局
export function getCompanyInfo() {
  return request.get(`active/company/list`);
}

// 获取活动主题
export function queryAttrSpec() {
  return request.get(`attrSpec/queryAttrSpec`, { attrCd: "activity_theme" });
}

// 获取活动形式
export function queryAttrSpecForm() {
  return request.get(`attrSpec/queryAttrSpec`, { attrCd: "activity_form" });
}

// 获取触客模版
export function queryAttrSpecTouch(params) {
  return request.get(`attrSpec/queryAttrSpec`, params);
}
// 获取晒单模版
export function queryAttrSpecShare() {
  return request.get(`attrSpec/queryAttrSpec`, {
    attrJavaCode: "shareTemplate",
  });
}

// 获取活动地点
export function queryAddress(params) {
  return request.get(`active/activity/address/list`, params);
}

// 获取列表
export function queryList(params) {
  return request.get(`active/my/activity/pc`, params);
}

// 导入文件
export function importInfo(params) {
  return request.post(`active/staff/excel/import`, params, { isFormData:true,timeout: 30000 });
}
//新增活动
export function updateActive(params) {
  return request.post(`active/update`, params);
}

//删除活动
export function deleteActivity(params) {
  return request.get(`active/delete`, params);
}

//获取活动详情
export function getActiveDetail(params) {
  return request.get(`active/getActiveDetail`, params);
}
