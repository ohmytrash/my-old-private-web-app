<template>
  <div id="app" ref="app">
    <Navigation class="navigation" />
    <transition name="fade">
      <router-view class="page" />
    </transition>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import { isMobile } from '@/utils/layer'
export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      listener: null
    }
  },
  methods: {
    onWindowResize() {
      if (isMobile()) {
        this.$refs.app.style.height = window.innerHeight - 60 + 'px'
        this.$refs.app.style.width = window.innerWidth + 'px'
      } else {
        this.$refs.app.style.height = window.innerHeight + 'px'
        this.$refs.app.style.width = window.innerWidth - 60 + 'px'
      }
    }
  },
  mounted() {
    this.onWindowResize()
    this.listener = window.addEventListener('resize', this.onWindowResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  min-height: 100vh;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
  }
}

body {
  padding-left: 60px;
  background-color: $gray-900;
  @include media-breakpoint-down(md) {
    padding-left: 0px;
    padding-bottom: 60px;
  }
}

#app {
  position: relative;
  overflow: hidden;
}

.page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: $gray-100;
}
</style>
