import request from '@/utils/ax'

// 查询评价列表
export function listAppraise(query) {
  return request({
    url: '/system/appraise/list',
    method: 'get',
    params: query
  })
}

// 查询评价详细
export function getAppraise(appraiseId) {
  return request({
    url: '/system/appraise/' + appraiseId,
    method: 'get'
  })
}

// 新增评价
export function addAppraise(data) {
  return request({
    url: '/system/appraise',
    method: 'post',
    data: data
  })
}

// 修改评价
export function updateAppraise(data) {
  return request({
    url: '/system/appraise',
    method: 'put',
    data: data
  })
}

// 删除评价
export function delAppraise(appraiseId) {
  return request({
    url: '/system/appraise/' + appraiseId,
    method: 'delete'
  })
}

// 导出评价
export function exportAppraise(query) {
  return request({
    url: '/system/appraise/export',
    method: 'get',
    params: query
  })
}