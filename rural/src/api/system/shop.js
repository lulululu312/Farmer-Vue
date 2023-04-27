import request from '@/utils/ax'

// 查询用户收藏的店家列表
export function listShop(query) {
  return request({
    url: '/system/shop/list',
    method: 'get',
    params: query
  })
}

// 查询用户收藏的店家详细
export function getShop(userId) {
  return request({
    url: '/system/shop/' + userId,
    method: 'get'
  })
}

// 新增用户收藏的店家
export function addShop(data) {
  return request({
    url: '/system/shop',
    method: 'post',
    data: data
  })
}

// 修改用户收藏的店家
export function updateShop(data) {
  return request({
    url: '/system/shop',
    method: 'put',
    data: data
  })
}

// 删除用户收藏的店家
export function delShop(userId) {
  return request({
    url: '/system/shop/' + userId,
    method: 'delete'
  })
}

// 导出用户收藏的店家
export function exportShop(query) {
  return request({
    url: '/system/shop/export',
    method: 'get',
    params: query
  })
}