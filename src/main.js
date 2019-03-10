import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

// import 'normalize.css/normalize.css'
import '@/scss/index.scss' // global css

import ElementUI from 'element-ui'
import '@/scss/element-variables.scss'

import i18n from './lang' // Internationalization

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
