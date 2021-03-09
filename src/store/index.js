import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagvalue: '',
  },
  mutations: {
    tagChange(state, value) {
      state.tagvalue = value
    }
  },
  actions: {},
  modules: {}
})