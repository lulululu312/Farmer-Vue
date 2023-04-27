import request from '@/utils/ax'

// 查询用户收藏文章列表
export function listArticle(query) {
  return request({
    url: '/system/article/list',
    method: 'get',
    params: query
  })
}

// 查询用户收藏文章详细
export function getArticle(userId) {
  return request({
    url: '/system/article/' + userId,
    method: 'get'
  })
}

// 新增用户收藏文章
export function addArticle(data) {
  return request({
    url: '/system/article',
    method: 'post',
    data: data
  })
}

// 修改用户收藏文章
export function updateArticle(data) {
  return request({
    url: '/system/article',
    method: 'put',
    data: data
  })
}

// 删除用户收藏文章
export function delArticle(userId) {
  return request({
    url: '/system/article/' + userId,
    method: 'delete'
  })
}

// 导出用户收藏文章
export function exportArticle(query) {
  return request({
    url: '/system/article/export',
    method: 'get',
    params: query
  })
}