<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<sctrip>
export default {
  created () {
    this.$store.dispatch('getComment')
  }
}
</sctrip>

<style lang="less">
html,body,#app {
  margin: 0;
  padding: 0;
}
</style>
