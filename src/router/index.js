import Vue from 'vue'
import Router from 'vue-router'

import MainRouter from '@/router/MainRouter'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main/dashboard'
    },
    ...MainRouter
  ]
})
