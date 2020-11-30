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
  metaInfo() {
    return this.meta
  },
  computed: {
    config() {
      return this.$store.state.config[this.$route.name.toLowerCase()] || {}
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
    fetch('https://my-json-server.typicode.com/dedeardiansya/db/db')
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.$store.commit('setConfig', data)
        setTimeout(() => {
          this.loading = false
        }, 500)
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
