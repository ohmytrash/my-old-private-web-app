<template>
  <div class="cursor" ref="circle"></div>
</template>

<script>
import { isMobile } from '@/utils'
export default {
  name: 'CursorFollower',
  data() {
    return {
      interval: null,
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,
      circle: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 30,
        h: 30
      }
    }
  },
  methods: {
    update: function() {
      let l = this.circle.x - this.circle.w / 2
      let t = this.circle.y - this.circle.h / 2

      if (!isMobile()) {
        l = l - 60
      }

      this.$refs.circle.style.transform = 'translate3d(' + l + 'px,' + t + 'px, 0)'
    },
    move() {
      this.circle.x = this.lerp(this.circle.x, this.mouseX, 0.1)
      this.circle.y = this.lerp(this.circle.y, this.mouseY, 0.1)
      this.update()
    },
    lerp(start, end, amt) {
      return (1 - amt) * start + amt * end
    }
  },
  mounted() {
    this.$refs.circle.style.opacity = 1
    window.onmousemove = e => {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.parentNode.nodeName === 'A' ||
        e.target.parentNode.parentNode.nodeName === 'A'
      ) {
        this.$refs.circle.classList.add('link')
      } else {
        this.$refs.circle.classList.remove('link')
      }
    }
    if (!this.interval) this.interval = setInterval(this.move, 1000 / 60)
  },
  beforeDestroy() {
    if (this.interval) window.clearInterval(this.interval)
  }
}
</script>
