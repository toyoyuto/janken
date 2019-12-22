import * as CONST from '@/common/constant'

// 初期化のしやすいように加工
const getDefaultState = () => {
  return {
    score: 0,
    count: 0,
    gameResults: []
  }
}

// initial state
const state = getDefaultState()

const mutations = {
  setScore (state, score) {
    state.score = score
  },
  setCount (state, count) {
    state.count = count
  },
  setGameResults (state, gameResult) {
    state.gameResults.push(gameResult)
    state.count += 1
    state.score =
      state.gameResults.filter(item => item.result === CONST.JANKEN_MESSAGE_WIN).length
  },
  clearState (state) {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  clearState (context) {
    context.commit('clearState')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
