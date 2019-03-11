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
      component: resolve => require(['@/layout/index.vue'], resolve),
      meta: { title: 'route.main' },
      redirect: '/main/dashboard',
      children: [
        {
          path: '/main/dashboard',
          name: 'dashboard',
          component: resolve => require(['@/views/dashboard/index.vue'], resolve),
          meta: { title: 'route.dashboard' }
        },
        {
          path: '/main/driver',
          name: 'driver',
          component: resolve => require(['@/views/driver/index.vue'], resolve),
          meta: { title: 'route.driver' }
        },
        {
          path: '/main/article-list',
          name: 'article-list',
          component: resolve => require(['@/views/article/article-list.vue'], resolve),
          meta: { title: 'route.articleList' }
        },
        {
          path: '/main/article-create',
          name: 'article-create',
          component: resolve => require(['@/views/article/article-create.vue'], resolve),
          meta: { title: 'route.articleCreate' }
        },
        {
          path: '/main/excel-import',
          name: 'excel-import',
          component: resolve => require(['@/views/excel/excel-import.vue'], resolve),
          meta: { title: 'route.excelImport' }
        },
        {
          path: '/main/excel-export',
          name: 'excel-export',
          component: resolve => require(['@/views/excel/excel-export.vue'], resolve),
          meta: { title: 'route.excelExport' }
        },
        {
          path: '/main/pdf',
          name: 'pdf',
          component: resolve => require(['@/views/pdf/index.vue'], resolve),
          meta: { title: 'route.pdf' }
        },
        {
          path: '/main/permission-create',
          name: 'permission-create',
          component: resolve => require(['@/views/permission/permission-create.vue'], resolve),
          meta: { title: 'route.permissionCreate' }
        }
      ]
    }
  ]
})
