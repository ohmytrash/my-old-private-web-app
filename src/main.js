import Vue from 'vue'
import App from '@/App'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import plugins from '@/plugins'

Vue.config.productionTip = false

Vue.use(plugins)

store.dispatch('loadTheme')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
