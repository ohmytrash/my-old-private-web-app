import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    progress: false
  },
  getters: {
    routeProgress(state) {
      return state.progress
    }
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload
      if (payload) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', true)
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.removeItem('dark-mode')
      }
    },
    setTransition(state, progress) {
      state.progress = progress
    }
  },
  actions: {
    loadTheme({ commit }) {
      if (localStorage.getItem('dark-mode')) {
        commit('setDarkMode', true)
      } else {
        commit('setDarkMode', false)
      }
    },
    toggleTheme({ commit }) {
      if (localStorage.getItem('dark-mode')) {
        commit('setDarkMode', false)
      } else {
        commit('setDarkMode', true)
      }
    }
  }
})
