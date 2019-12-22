import Vue from 'vue'
import Vuex from 'vuex'

import game from './game'
import score from './score'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    game,
    score
  }
})

export default store
