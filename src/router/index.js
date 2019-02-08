import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import View from '@/components/View'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Logout from '@/components/Logout'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/view',
      name: 'view',
      component: View
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
