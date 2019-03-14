import i18n from '@/lang'

const popoverMixin = {
  // ...
}

export default [
  {
    element: '[data-info="1-0"]',
    popover: {
      title: '侧边栏操作',
      description: '展开或收起侧边栏',
      position: 'bottom',
      ...popoverMixin
    }
  },
  {
    element: '[data-info="1-1"]',
    popover: {
      title: i18n.t('info.1-1.title'),
      description: i18n.t('info.1-1.description'),
      position: 'bottom',
      ...popoverMixin
    }
  },
  {
    element: '[data-info="1-2"]',
    popover: {
      title: '全屏功能',
      description: '开启或关闭全屏',
      position: 'bottom',
      ...popoverMixin
    }
  },
  {
    element: '[data-info="1-3"]',
    popover: {
      title: '国际化',
      description: '切换语言环境',
      position: 'bottom-right',
      ...popoverMixin
    }
  }
]
