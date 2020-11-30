import Vue from 'vue'
import Vuex from 'vuex'

import config from './modules/config'
import theme from './modules/theme'
import transition from './modules/transition'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    theme,
    transition
  }
})
