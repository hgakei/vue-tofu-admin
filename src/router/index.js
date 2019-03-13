import Vue from 'vue'
import Router from 'vue-router'
import { $clone } from '@/utils/utils.js'

import MainRouter from '@/router/MainRouter'

Vue.use(Router)

const _MainRouter_ = $clone(MainRouter)
let children = []
_MainRouter_.children.forEach(item => {
  if (item.component && !item.children) {
    children.push(item)
  } else if (!item.component && item.children) {
    children.push(...item.children)
  }
})

_MainRouter_.children = children

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main/dashboard'
    },
    _MainRouter_
  ]
})
