<template>
  <div id="game">
    <!-- 自分の手 -->
    <div>
      <div>
        じゃんけん
      </div>
      <img @click="fight('ぐー')" :src="imgList[0]">
      <img @click="fight('ちょき')" :src="imgList[1]">
      <img @click="fight('ぱー')" :src="imgList[2]">
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
export default {
  name: 'game',
  data: function () {
    return {
      hand: ['ぐー', 'ちょき', 'ぱー'],
      enemyHand: '',
      enemyHandImage: '',
      result: 'いざ勝負!',
      imgList: [
        require('@/assets/imgs/gu.png'),
        require('@/assets/imgs/cyoki.png'),
        require('@/assets/imgs/par.png')
      ]
    }
  },
  methods: {
    fight: function (myHand) {
      const index = Math.floor(Math.random() * Math.floor(3))
      this.enemyHand = this.hand[index]
      this.enemyHandImage = this.imgList[index]
      // 引き分け
      if (myHand === this.enemyHand) {
        this.result = '引き分け'
      }

      // 勝ち判定
      if (this.enemyHand === 'ぐー' && myHand === 'ぱー') {
        this.result = '勝ち'
      }
      if (this.enemyHand === 'ちょき' && myHand === 'ぐー') {
        this.result = '勝ち'
      }
      if (this.enemyHand === 'ぱー' && myHand === 'ちょき') {
        this.result = '勝ち'
      }
      // 負け判定
      if (this.enemyHand === 'ぐー' && myHand === 'ちょき') {
        this.result = '負け'
      }
      if (this.enemyHand === 'ちょき' && myHand === 'ぱー') {
        this.result = '負け'
      }
      if (this.enemyHand === 'ぱー' && myHand === 'ぐー') {
        this.result = '負け'
      }
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
