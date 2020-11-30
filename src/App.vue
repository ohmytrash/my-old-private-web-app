<template>
  <div id="app" ref="app">
    <Noise />
    <RootTransition>
      <Loading v-if="loading" />
    </RootTransition>
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
import Loading from '@/components/BootLoading'
import { isMobile } from '@/utils/layer'
export default {
  name: 'App',
  components: {
    Navigation,
    Noise,
    RootTransition,
    Loading
  },
  data() {
    return {
      listener: null,
      loading: true
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
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  }
}
</script>
