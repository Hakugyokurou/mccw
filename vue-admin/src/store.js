import Vue from 'vue'
import Vuex from 'vuex'
import api from './axios/api.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: null,
    mok:[],
  },
  mutations: {
    incrment(state, val) {
      state.obj = val
    },
    mokdata(state,val){
      state.mok = val
    }
  },
  actions: {
    getdata: function() {
      api.mockdata('/components/Home')
        .then(res => {
          console.log(this);
          this.commit('mokdata',res)
        })

    }
  }
})
