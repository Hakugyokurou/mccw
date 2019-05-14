import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: null
  },
  mutations: {
    incrment (state, val) {
      state.obj = val
    }
  },
  actions: {

  }
})
