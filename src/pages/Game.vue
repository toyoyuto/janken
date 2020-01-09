<template>
  <div id="game">
    <!-- 自分の手 -->
    <div>
      <div>
        じゃんけん
      </div>
      <!-- <img @click="fight('ぐー')" :src="imgList[0]">
      <img @click="fight('ちょき')" :src="imgList[1]">
      <img @click="fight('ぱー')" :src="imgList[2]"> -->
      <JankenList
      v-for="jankenItem in jankenList"
      :key="jankenItem.id"
      :jankenItem="jankenItem"
      @fight="fight"
    />
    </div>
    <!-- 敵の手 -->
    <div style="margin-top: 30px">
      <h2>コンピューター</h2>
      <div>{{ enemyHand }}</div>
      <img :src="enemyHandImage">
    </div>
    <h2>結果<br>{{ result }}</h2>
  </div>
</template>

<script>
import Vue from 'vue'
import * as CONST from '@/common/constant'
// その場しか使わないコンポーネント練習用
var JankenList = Vue.component('janken-list', {
  props: ['jankenItem'],
  methods: {
    fight () {
      this.$emit('fight', this.jankenItem.hand)
    }
  },
  template: `
  <img @click="fight" :src="jankenItem.img">
  `
})
export default {
  name: 'game',
  components: {
    JankenList
  },
  computed: {
    imgList () {
      return this.$store.state.game.imgList
    },
    enemyHand () {
      return this.$store.state.game.enemyHand
    },
    enemyHandImage () {
      return this.$store.state.game.enemyHandImage
    },
    result () {
      return this.$store.state.game.result
    },
    jankenList () {
      return this.imgList.map((item, index) => {
        let hand
        if (index === 0) {
          hand = CONST.JANKEN_HAND_GU
        } else if (index === 1) {
          hand = CONST.JANKEN_HAND_CYOKI
        } else {
          hand = CONST.JANKEN_HAND_PAR
        }
        return {
          id: index,
          img: item,
          hand: hand
        }
      })
    }
  },
  methods: {
    fight (myHand) {
      this.$store.dispatch('game/fight', myHand)
    }
  }
}

</script>

<style>
#game {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
