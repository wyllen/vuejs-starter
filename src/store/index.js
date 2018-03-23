import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
}

//getters
const getters = {
}

// mutations
const mutations = {
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  // modules: {

  // },
  strict: debug,
  plugins: []
})

export default store