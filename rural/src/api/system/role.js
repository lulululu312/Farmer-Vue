import request from '@/utils/ax'

// 查询用户角色关联列表
export function listRole(query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query
  })
}

// 查询用户角色关联详细
export function getRole(userId) {
  return request({
    url: '/system/role/' + userId,
    method: 'get'
  })
}

// 新增用户角色关联
export function addRole(data) {
  return request({
    url: '/system/role',
    method: 'post',
    data: data
  })
}

// 修改用户角色关联
export function updateRole(data) {
  return request({
    url: '/system/role',
    method: 'put',
    data: data
  })
}

// 删除用户角色关联
export function delRole(userId) {
  return request({
    url: '/system/role/' + userId,
    method: 'delete'
  })
}

// 导出用户角色关联
export function exportRole(query) {
  return request({
    url: '/system/role/export',
    method: 'get',
    params: query
  })
}