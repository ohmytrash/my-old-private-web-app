import icons from './icons'
import VueMeta from 'vue-meta'
import { VLazyImagePlugin } from 'v-lazy-image'

import '@/assets/scss/app.scss'

const Plugins = {
  install(Vue) {
    Vue.use(icons)
    Vue.use(VueMeta)
    Vue.use(VLazyImagePlugin)
  }
}

export default Plugins
