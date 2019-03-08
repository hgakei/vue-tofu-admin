import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import 'normalize.css/normalize.css'
import '@/scss/index.scss' // global css

import ElementUI from 'element-ui'
import '@/scss/element-variables.scss';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
