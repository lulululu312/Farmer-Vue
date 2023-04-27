import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:''
  },
  getters: {
  },
  mutations: {
    saveId(state,pyload){
      state.userId=pyload.userId
    }
  },
  actions: {
  },
  modules: {
  }
})
