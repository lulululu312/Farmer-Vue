import axios from 'axios'
import ElementUI from "element-ui";

const request = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})


// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8';
  let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  // console.log(user)
  if (user) {
    config.headers['Authorization'] = user; // 设置请求头
  }
  return config
}, error => {
  return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
    let res = response.data;
    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
      return res
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }

    if (res.code === '401') {
      ElementUI.Message({
        message: res.msg,
        type: "warning"
      })
    }
    return res;
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request


// import Vue from 'vue'
// // 导入axios模块
// import axios from 'axios'
// // 配置公共根地址(线上地址)
// axios.defaults.baseURL = 'http://10.129.29.16:18080'
// // 配置为Vue的继承成员
// Vue.prototype.$http = axios

// // 请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 发送请求的相关逻辑
//   let userinfo = window.localStorage.getItem('user')
//   // 判断token存在再做配置
//   if (userinfo) {
//     let token = JSON.parse(userinfo).token
//     config.headers.Authorization = token
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
// export default axios