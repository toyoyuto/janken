<template>
  <div id="score">
    <h1>成績</h1>
    <div><button type="button" v-on:click.prevent="dataReset">クリア</button></div>
    <div v-show="resultMessage">
      <label>結果</label>{{ resultMessage }}
    </div>
    <div>
      <label>試合数</label>{{ count }}
    </div>
    <div>
      <label>勝利数</label>{{ score }}
    </div>
    <ul v-if="gameResults">
      <li v-for="(gameResult, index) of gameResults"  v-bind:key="index">
        <span>{{ (index + 1) }}:</span>{{ gameResult.hand }}{{ gameResult.result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'score',
  computed: {
    gameResults () {
      return this.$store.state.score.gameResults
    },
    score () {
      return this.$store.state.score.score
    },
    count () {
      return this.$store.state.score.count
    },
    resultMessage () {
      return this.$store.state.score.resultMessage
    }
  },
  methods: {
    dataReset: function () {
      this.$store.dispatch('score/clearState')
    }
  }
}
</script>

<style>
#score {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
