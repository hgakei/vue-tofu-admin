import Content from './Content/index.vue'
import RichText from './RichText/index.vue'
import Scrollbar from './Scrollbar/index.vue'
import { DialogApi, Dialog } from './Dialog/index.js'

const components = [
  Content,
  Dialog,
  RichText,
  Scrollbar
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })

  // prototype
  Vue.prototype.$dialog = DialogApi
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
