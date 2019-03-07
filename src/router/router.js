import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main/dashboard'
    },
    {
      path: '/main',
      component: () => import('@/layout/index.vue'),
      meta: { title: '系统首页' },
      children: [
        {
          path: '/main/dashboard',
          name: 'dashboard',
          component: resolve => require(['@/views/dashboard/index.vue'], resolve),
          meta: { title: '系统首页' }
        },
        {
          path: '/main/driver',
          name: 'driver',
          component: resolve => require(['@/views/driver/index.vue'], resolve),
          meta: { title: '引导页' }
        },
        {
          path: '/main/article-list',
          name: 'article-list',
          component: resolve => require(['@/views/article/article-list.vue'], resolve),
          meta: { title: '文章列表' }
        },
        {
          path: '/main/article-create',
          name: 'article-create',
          component: resolve => require(['@/views/article/article-create.vue'], resolve),
          meta: { title: '创建文章' }
        },
        {
          path: '/main/excel-import',
          name: 'excel-import',
          component: resolve => require(['@/views/excel/excel-import.vue'], resolve),
          meta: { title: '导入Excel' }
        },
        {
          path: '/main/excel-export',
          name: 'excel-export',
          component: resolve => require(['@/views/excel/excel-export.vue'], resolve),
          meta: { title: '导出Excel' }
        },
        {
          path: '/main/pdf',
          name: 'pdf',
          component: resolve => require(['@/views/pdf/index.vue'], resolve),
          meta: { title: 'pdf' }
        },
        {
          path: '/main/permission-create',
          name: 'permission-create',
          component: resolve => require(['@/views/permission/permission-create.vue'], resolve),
          meta: { title: '权限设置' }
        }
      ]
    }
  ]
})
