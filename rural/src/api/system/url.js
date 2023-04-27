import request from '@/utils/ax'

// 查询图片列表
export function listUrl(query) {
  return request({
    url: '/system/url/list',
    method: 'get',
    params: query
  })
}

// 查询图片详细
export function getUrl(imageId) {
  return request({
    url: '/system/url/' + imageId,
    method: 'get'
  })
}

// 新增图片
export function addUrl(data) {
  return request({
    url: '/system/url',
    method: 'post',
    data: data
  })
}

// 修改图片
export function updateUrl(data) {
  return request({
    url: '/system/url',
    method: 'put',
    data: data
  })
}

// 删除图片
export function delUrl(imageId) {
  return request({
    url: '/system/url/' + imageId,
    method: 'delete'
  })
}

// 导出图片
export function exportUrl(query) {
  return request({
    url: '/system/url/export',
    method: 'get',
    params: query
  })
}