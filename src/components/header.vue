<template>
  <div id="header">
    <h1>じゃんけんゲーム</h1>
    <nav>
      <RouterLink to="/game">
        ゲーム
      </RouterLink>
      <RouterLink to="/score">
        せいせき
      </RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
#header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
