export default {
  path: '/main',
  name: 'main',
  component: resolve => require(['@/layout/index.vue'], resolve),
  meta: {
    title: 'route.main'
  },
  redirect: '/main/dashboard',
  children: [
    {
      path: '/main/dashboard',
      name: 'dashboard',
      component: resolve => require(['@/views/dashboard/index.vue'], resolve),
      meta: {
        title: 'route.dashboard',
        icon: 'iconicon_work_fill',
        menu: true
      }
    },
    {
      path: '/main/guide',
      name: 'guide',
      component: resolve => require(['@/views/guide/index.vue'], resolve),
      meta: {
        title: 'route.guide',
        icon: 'iconicon_memo',
        menu: true
      }
    },
    {
      path: '/main/article',
      name: 'article',
      meta: {
        title: 'route.article',
        icon: 'iconword',
        menu: true,
        hideMic: true
      },
      children: [
        {
          path: '/main/article/editor',
          name: 'editor',
          component: resolve => require(['@/views/article/editor.vue'], resolve),
          meta: {
            title: 'route.editor',
            menu: true
          }
        },
        {
          path: '/main/article/markdown',
          name: 'markdown',
          component: resolve => require(['@/views/article/markdown.vue'], resolve),
          meta: {
            title: 'route.markdown',
            menu: true
          }
        }
      ]
    },
    {
      path: '/main/excel',
      name: 'excel',
      meta: {
        title: 'route.excel',
        icon: 'iconexcel',
        menu: true,
        hideMic: true
      },
      children: [
        {
          path: '/main/excel/excel-import',
          name: 'excel-import',
          component: resolve => require(['@/views/excel/excel-import.vue'], resolve),
          meta: {
            title: 'route.excelImport',
            menu: true
          }
        },
        {
          path: '/main/excel/excel-export',
          name: 'excel-export',
          component: resolve => require(['@/views/excel/excel-export.vue'], resolve),
          meta: {
            title: 'route.excelExport',
            menu: true
          }
        }
      ]
    },
    {
      path: '/main/pdf',
      name: 'pdf',
      component: resolve => require(['@/views/pdf/index.vue'], resolve),
      meta: {
        title: 'route.pdf',
        icon: 'iconpdf',
        menu: true
      }
    },
    {
      path: '/main/permission',
      name: 'permission',
      meta: {
        title: 'route.permissionCreate',
        icon: 'iconsvgmoban12',
        menu: true,
        hideMic: true
      },
      children: [
        {
          path: '/main/permission-create',
          name: 'permission-create',
          component: resolve => require(['@/views/permission/permission-create.vue'], resolve),
          meta: {
            title: 'route.permissionCreate',
            menu: true
          }
        }
      ]
    }
  ]
}
