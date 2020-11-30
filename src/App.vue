<template>
  <div id="app" ref="app">
    <Noise />
    <CursorFollower />
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
