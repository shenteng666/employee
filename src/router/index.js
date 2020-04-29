import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/index'

Vue.use(Router)

export default new Router({
  mode: 'history', // 作用：去掉vue路径中的#号
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
