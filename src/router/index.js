import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/pages/Game'
import Score from '@/pages/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/game'
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ],
  mode: 'history'
})
