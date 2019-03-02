import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['@/views/Dashboard/index.vue'], resolve),
          meta: { title: '系统首页' }
        }
      ]
    }
  ]
})
