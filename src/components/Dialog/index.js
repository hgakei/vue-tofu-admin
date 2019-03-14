import Vue from 'vue'
import _Dialog from './index.vue'

function open (propsData) {
  const ToastComponent = Vue.extend(_Dialog)
  return new ToastComponent({
    el: document.createElement('div'),
    propsData
  })
}

export const DialogApi = {
  show (content) {
    const defaultOpts = {
      ...content,
      visible: true,
      beforConfirm (next) {
        !content.beforConfirm && next()
        content.beforConfirm && content.beforConfirm(next)
      },
      beforClose (next) {
        !content.beforClose && next()
        content.beforClose && content.beforClose(next)
      }
    }
    return open(defaultOpts)
  }
}

export const Dialog = _Dialog
