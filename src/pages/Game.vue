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
