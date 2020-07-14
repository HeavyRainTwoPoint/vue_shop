import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from "../components/Home.vue"

// 导入全局样式
import "../assets/global.css"

Vue.use(Router)


const router = new Router({
  routes: [
    {path: '/', redirect: "/login"},
    {path: '/login', component: Login },
    {path: '/home', component: Home}
  ]
})

//配置路由导航卫士进行权限验证
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from代表从哪个路径跳转而来
  // next 是哪个函数，表示放行
  // next()表示放行    next('/login') 表示强制跳转
  if(to.path === '/login') return next()
  // 这里是做校验
  // const tokenStr = window.sessionStorage.getItem('token')
  // if(!tokenStr) return next('/login')
  next()
})

export default router
