import icons from './icons'
import { BButton } from 'bootstrap-vue'

import '@/assets/scss/app.scss'

const Plugins = {
  install(Vue) {
    Vue.use(icons)
    Vue.component('BButton', BButton)
  }
}

export default Plugins
