<template>
  <div id="game">
    <!-- 自分の手 -->
    <div>
      <h2>自分</h2>
      <JankenList
      v-for="jankenItem in jankenList"
      :key="jankenItem.id"
      :jankenItem="jankenItem"
      @fight="fight"
    />
    </div>
    <button @click="show = !show">
      押して
    </button>
    <!-- 敵の手 -->
    <transition name="megumi">
    <div style="margin-top: 30px" v-if="show">
      <h2>コンピューター</h2>
      <div>{{ enemyHand }}</div>
      <img :src="enemyHandImage">
    </div>
    </transition>
    <!-- <h2>結果<br>{{ result }}</h2> -->
    <slotComp>
      <h2 slot="result">
        結果<br>{{ result }}
      </h2>
    </slotComp>
    <slotComp2>
      <template slot="slot1" slot-scope="p">
        対戦相手の紹介です！{{ p.text }}
      </template>
      <template>
        ユーザー
      </template>
    </slotComp2>
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
// スロット練習用
var slotComp = {
  template: `
    <div>
      <h2><slot name="result">デフォルト</slot></h2>
    </div>
  `
}
var slotComp2 = {
  template: `
    <div>
      <h2><slot name="slot1" text="対戦相手は"></slot></h2>
      <h2><slot>デフォルト</slot>さんです。</h2>
    </div>
  `
}
export default {
  name: 'game',
  components: {
    JankenList,
    slotComp,
    slotComp2
  },
  data () {
    return {
      show: false
    }
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
    count () {
      return this.$store.state.score.count
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
  },
  watch: {
    count: function (newVal, oldVal) {
      // 試合数が変化したとき
      this.show = true
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
.megumi-enter-active, .megumi-leave-active {
  transition: opacity .5s;
}

.megumi-enter, .megumi-leave-to {
  opacity: 0;
}
</style>
