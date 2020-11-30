<template>
  <div id="app" ref="app">
    <Noise />
    <Navigation class="navigation" />
    <RootTransition>
      <router-view class="page" />
    </RootTransition>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Noise from '@/components/Noise'
import RootTransition from '@/components/RootTransition'
import { isMobile } from '@/utils/layer'
export default {
  name: 'App',
  components: {
    Navigation,
    Noise,
    RootTransition
  },
  data() {
    return {
      listener: null
    }
  },
  methods: {
    onWindowResize() {
      if (isMobile()) {
        this.$refs.app.style.height = window.innerHeight - 59 + 'px'
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
