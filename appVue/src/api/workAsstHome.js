import request from '@/utils/request'
// 我的活动接口
export function activityListApi(params) {
    return request.get(`active/staff/activity/list`, params)
}