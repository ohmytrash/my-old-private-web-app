<template>
  <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave">
    <slot />
  </transition>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'RootTransition',
  data() {
    return {
      animation: null
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0.75
      el.style.transform = 'scale(0.9)'
      el.style.top = '100%'
    },
    enter(targets, done) {
      this.animation = anime
        .timeline({
          easing: 'easeOutExpo',
          duration: 750,
          targets
        })
        .add({
          delay: 750,
          easing: 'easeInOutCirc',
          top: 0
        })
        .add({
          scale: 1,
          opacity: 1,
          complete: () => done()
        })
    },
    afterEnter() {
      this.$store.commit('setTransition', false)
    },

    beforeLeave(el) {
      el.style.opacity = 1
      el.style.transform = 'scale(1)'
      el.style.top = '0'
    },
    leave(targets, done) {
      this.$store.commit('setTransition', true)
      setTimeout(() => {
        this.$store.commit('setTransition', false)
      }, 750 + 750)
      anime
        .timeline({
          targets,
          easing: 'easeOutExpo',
          duration: 750
        })
        .add({
          opacity: 0.75,
          scale: 0.9
        })
        .add({
          top: '-100%',
          easing: 'easeInOutCirc',
          complete: () => done()
        })
    }
  }
}
</script>
