import { JSON_DB_URL } from '@/config'

const state = {
  config: {}
}

const getters = {
  config(state) {
    return state.config
  }
}

const actions = {
  loadConfig({ commit }) {
    return fetch(JSON_DB_URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        commit('setConfig', data)
        return data
      })
  }
}

const mutations = {
  setConfig(state, payload) {
    state.config = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
