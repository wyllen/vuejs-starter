<template>
  <div class="app-wrapper">
      <p>{{msg}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
  },
  name: 'app',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="scss">
</style>
