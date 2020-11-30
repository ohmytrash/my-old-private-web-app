const state = {
  darkMode: false
}

const getters = {
  isDarkMode(state) {
    return state.darkMode
  }
}

const actions = {
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

const mutations = {
  setDarkMode(state, payload) {
    state.darkMode = payload
    if (payload) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('dark-mode', true)
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.removeItem('dark-mode')
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
