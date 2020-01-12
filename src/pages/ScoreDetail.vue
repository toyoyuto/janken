<template>
  <div id="scoreDetail">
  ID:{{this.$route.params.id}}
  <br>
  {{this.$route.params.count}}試合目
  </div>
</template>

<script>
export default {
  name: 'scoreDetail'
}
</script>

<style>
#scoreDetail {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
