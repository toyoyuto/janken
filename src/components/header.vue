<template>
  <div id="headerRouter">
    <h1>じゃんけんゲーム</h1>
    <nav>
      <RouterLink to="/game" v-show="count < 10">
        ゲーム
      </RouterLink>
      <RouterLink to="/score">
        せいせき
      </RouterLink>
    </nav>
    <Logo />
  </div>
</template>

<script>
import Logo from '../components/logo.vue'

export default {
  name: 'hearerRouter',
  components: {
    Logo
  },
  computed: {
    count () {
      return this.$store.state.score.count
    }
  },
  watch: {
    count (val) {
      if (val === 10) {
        this.$router.push('/score')
        this.$store.dispatch('score/createResultMessage')
      }
    }
  }
}

</script>

<style>
#headerRouter {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
