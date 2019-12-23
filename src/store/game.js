import * as CONST from '@/common/constant'

// 初期化のしやすいように加工
const getDefaultState = () => {
  return {
    hand: [
      CONST.JANKEN_HAND_GU,
      CONST.JANKEN_HAND_CYOKI,
      CONST.JANKEN_HAND_PAR
    ],
    enemyHand: '',
    enemyHandImage: '',
    result: 'いざ勝負!',
    imgList: [
      require('@/assets/imgs/gu.png'),
      require('@/assets/imgs/cyoki.png'),
      require('@/assets/imgs/par.png')
    ]
  }
}

// initial state
const state = getDefaultState()

const mutations = {
  setEnemyHand (state, enemyHand) {
    state.enemyHand = enemyHand
  },
  setEnemyHandImage (state, enemyHandImage) {
    state.enemyHandImage = enemyHandImage
  },
  setResult (state, result) {
    state.result = result
  },
  clearState (state) {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  fight (context, myHand) {
    const index = Math.floor(Math.random() * Math.floor(3))
    context.commit('setEnemyHand', context.state.hand[index])
    context.commit('setEnemyHandImage', context.state.imgList[index])

    // 結果のメッセージ
    let resultMessage
    // 引き分け
    if (myHand === context.state.enemyHand) {
      resultMessage = CONST.JANKEN_MESSAGE_DRAW
    }

    // 勝ち判定
    if ((context.state.enemyHand === CONST.JANKEN_HAND_GU && myHand === CONST.JANKEN_HAND_PAR) ||
    (context.state.enemyHand === CONST.JANKEN_HAND_CYOKI && myHand === CONST.JANKEN_HAND_GU) ||
    (context.state.enemyHand === CONST.JANKEN_HAND_PAR && myHand === CONST.JANKEN_HAND_CYOKI)) {
      resultMessage = CONST.JANKEN_MESSAGE_WIN
    }
    // 負け判定
    if ((context.state.enemyHand === CONST.JANKEN_HAND_GU && myHand === CONST.JANKEN_HAND_CYOKI) ||
    (context.state.enemyHand === CONST.JANKEN_HAND_CYOKI && myHand === CONST.JANKEN_HAND_PAR) ||
    (context.state.enemyHand === CONST.JANKEN_HAND_PAR && myHand === CONST.JANKEN_HAND_GU)) {
      resultMessage = CONST.JANKEN_MESSAGE_LOSE
    }
    context.commit('setResult', resultMessage)
    // 今回のゲーム結果を格納(手、結果)
    const gameResult = {
      'hand': myHand,
      'result': resultMessage
    }
    context.commit('score/setGameResults', gameResult, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
