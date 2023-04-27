import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/users',
    name:'users',
    component:()=>import('@/views/Users/index'),
    redirect:'/users/info',
    children:[
      {
        path:'info',
        name:'usersInfo',
        component:()=>import('@/views/Users/info')
      },
      {
        path:'address',
        name:'address',
        component:()=>import('@/views/Users/address')
      },
      {
        path:'pwdrevise',
        name:'pwdRevise',
        component:()=>import('@/views/Users/pwdrevise')
      }
    ]
  },
  {
    path:'/article',
    name:'article',
    component:()=>import('@/views/Article/Index')
  },
  {
    path:'/admin',
    name:'admin',
    component:()=>import('@/views/Admin/index'),
    redirect:'/home',
    children:[
      {
        path:'users',
        name:'adminUsers',
        component:()=>import('@/views/Admin/users')
      },
      {
        path:'products',
        name:'adminProducts',
        component:()=>import('@/views/Admin/products')
      },
      {
        path:'artical',
        name:'adminArtical',
        component:()=>import('@/views/Admin/artical')
      },
      
      {
        path:'/home',
        name:'adminHome',
        component:()=>import('@/views/Admin/home')
      }
    ]
  },
  {
    path:'/detail',
    name:'detail',
    component:()=>import('@/views/Head/Detail')
  },
  {
    path:'/traval',
    name:'traval',
    component:()=>import('@/views/Head/Traval')
  },
  {
    path:'/agriculture',
    name:'agriculture',
    component:()=>import('@/views/Head/Agriculture')
  },
]

// path: '/documentation',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/documentation/index'),
//         name: 'Documentation',
//         meta: { title: 'Documentation', icon: 'documentation', affix: true }
//       }
//     ]



const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // const token = getToken()
//   // if (token) {
//   //   if (to.path === '/login') {
//   //     next('/') // 系统根路由
//   //   } else {
//   //     // 其他鉴权操作，比如资源是否可访问
//   //     let menus = store.getters['user/menus']
//   //     if (menus.includes(to.path)) {
//   //       next()
//   //     } else {
//   //       next({
//   //         path: '/403',
//   //         replace: true // 替换当前路由，避免用户后退等操作导致重复跳转
//   //       })
//   //     }
//   //   }
//   // } else {
//   //   if (whiteList.includes(to.path)) {
//   //     next()
//   //   } else {
//   //     next(`/login?redirect=${to.path}`)
//   //   }
//   // }
//     // 处理多个地址,创建js文件，直接在上方导入，导入之后直接用
//     //如果访问的是后台主页
//     if (pathArr.indexOf(to.path) !== -1) {
//     //先拿出token
//     const token = localStorage.getItem('token')
//     //如果有token，说明已经注册过了
//     if (token) {
//     //直接进入后台主页
//     next()
//     } else {
//     //如果没有注册，就直接返回登录页面
//     next('/login')
//     }
//     } else {
//     // 如果不是访问后台主页。直接进
//     next()
//     }
// })

export default router
