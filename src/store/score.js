import * as CONST from '@/common/constant'

// 初期化のしやすいように加工
const getDefaultState = () => {
  return {
    score: 0,
    count: 0,
    gameResults: [],
    resultMessage: ''
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
  setResultMessage (state, resultMessage) {
    state.resultMessage = resultMessage
  },
  clearState (state) {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  clearState (context) {
    context.commit('clearState')
    context.commit('game/clearState', null, { root: true })
  },
  createResultMessage (context) {
    let resultMessage
    if (context.state.score >= 8) {
      resultMessage = '完敗！'
    } else if (context.state.score >= 4) {
      resultMessage = 'つよいです！'
    } else {
      resultMessage = 'よわい'
    }

    context.commit('setResultMessage', resultMessage)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
