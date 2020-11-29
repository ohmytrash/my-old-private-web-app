<template>
  <div id="app">
    <Navigation class="navigation" />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  min-height: 100vh;
}
body {
  padding-left: 60px;
  @include media-breakpoint-down(sm) {
    padding-left: 0px;
    padding-bottom: 60px;
  }
}
</style>
