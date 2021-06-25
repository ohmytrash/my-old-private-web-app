<template>
  <div id="app" ref="app">
    <Noise />
    <CursorFollower />
    <span class="copyright"
      >&copy; {{ new Date().getFullYear() }} <span class="text-primary font-weight-bold">DedeArd</span>. All right reserved.</span
    >
    <SlideYUpTransition :duration="800" :delay="1500">
      <Loading v-if="loading" />
    </SlideYUpTransition>
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
import CursorFollower from '@/components/Cursor'
import { SlideYUpTransition } from 'vue2-transitions'

import { isMobile } from '@/utils'
export default {
  name: 'App',
  metaInfo() {
    return this.meta
  },
  computed: {
    config() {
      return this.$store.getters.config[this.$route.name.toLowerCase()] || {}
    },
    meta() {
      return {
        title: this.config.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.config.description
          }
        ]
      }
    }
  },
  components: {
    Navigation,
    Noise,
    RootTransition,
    Loading,
    CursorFollower,
    SlideYUpTransition
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
    this.$store
      .dispatch('loadConfig')
      .then(() => {
        this.loading = false
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  }
}
</script>

<style lang="scss">
.copyright {
  position: fixed;
  bottom: 5px;
  right: 30px;
  z-index: 200;
  font-size: 0.875rem;
  color: $gray-500;
  line-height: 1;
  pointer-events: none;
}
</style>
