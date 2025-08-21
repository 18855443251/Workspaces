import request from '@/utils/request'
// 查询通知公告⾸⻚
export function noticeIndexApi(params) {
    return request.get(`brgj/notice/index`, params)
}