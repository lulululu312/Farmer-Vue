import request from '@/utils/ax'

// 查询权限列表
export function listMenu(query) {
  return request({
    url: '/system/menu/list',
    method: 'get',
    params: query
  })
}

// 查询权限详细
export function getMenu(id) {
  return request({
    url: '/system/menu/' + id,
    method: 'get'
  })
}

// 新增权限
export function addMenu(data) {
  return request({
    url: '/system/menu',
    method: 'post',
    data: data
  })
}

// 修改权限
export function updateMenu(data) {
  return request({
    url: '/system/menu',
    method: 'put',
    data: data
  })
}

// 删除权限
export function delMenu(id) {
  return request({
    url: '/system/menu/' + id,
    method: 'delete'
  })
}

// 导出权限
export function exportMenu(query) {
  return request({
    url: '/system/menu/export',
    method: 'get',
    params: query
  })
}