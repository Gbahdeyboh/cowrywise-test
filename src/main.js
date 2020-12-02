import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
