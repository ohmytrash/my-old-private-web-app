const state = {
  progress: false
}

const getters = {
  routeProgress(state) {
    return state.progress
  }
}

const mutations = {
  setTransition(state, payload) {
    state.progress = payload
  }
}

export default {
  state,
  getters,
  mutations
}
