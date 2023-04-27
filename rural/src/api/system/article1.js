import request from '@/utils/ax'

// 查询农业文章列表
export function listArticle(query) {
  return request({
    url: '/system/article/list',
    method: 'get',
    params: query
  })
}

// 查询农业文章详细
export function getArticle(articleId) {
  return request({
    url: '/system/article/' + articleId,
    method: 'get'
  })
}

// 新增农业文章
export function addArticle(data) {
  return request({
    url: '/system/article',
    method: 'post',
    data: data
  })
}

// 修改农业文章
export function updateArticle(data) {
  return request({
    url: '/system/article',
    method: 'put',
    data: data
  })
}

// 删除农业文章
export function delArticle(articleId) {
  return request({
    url: '/system/article/' + articleId,
    method: 'delete'
  })
}

// 导出农业文章
export function exportArticle(query) {
  return request({
    url: '/system/article/export',
    method: 'get',
    params: query
  })
}