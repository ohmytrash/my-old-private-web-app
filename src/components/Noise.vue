<template>
  <div class="noise" :style="`background-image: url(${Noise})`">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Noise from '@/assets/img/noise.gif'
export default {
  data() {
    return {
      Noise,
      canvas: null,
      ctx: null,
      wWidth: window.innerWidth,
      wHeight: window.innerHeight,
      noiseData: [],
      frame: 0,
      loopTimeout: null,
      resizeThrottle: null
    }
  },
  methods: {
    createNoise() {
      const idata = this.ctx.createImageData(this.wWidth, this.wHeight)
      const buffer32 = new Uint32Array(idata.data.buffer)
      const len = buffer32.length
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff163238
        }
      }
      this.noiseData = [...this.noiseData, idata]
    },
    paintNoise() {
      if (this.frame === 9) {
        this.frame = 0
      } else {
        this.frame = this.frame + 1
      }
      this.ctx.putImageData(this.noiseData[this.frame], 0, 0)
    },
    loop() {
      this.paintNoise()
      this.loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(this.loop)
      }, 1000 / 20)
    },
    setup() {
      this.wWidth = window.innerWidth
      this.wHeight = window.innerHeight
      this.canvas.width = this.wWidth
      this.canvas.height = this.wHeight
      for (let i = 0; i < 10; i++) {
        this.createNoise()
      }
      this.loop()
    },
    reset() {
      if (this.resizeThrottle) window.clearTimeout(this.resizeThrottle)
      this.resizeThrottle = window.setTimeout(() => {
        window.clearTimeout(this.loopTimeout)
        this.setup()
      }, 200)
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    // this.setup()
    // window.addEventListener('resize', this.reset)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reset)
    if (this.resizeThrottle) window.clearTimeout(this.resizeThrottle)
    if (this.loopTimeout) window.clearTimeout(this.loopTimeout)
  }
}
</script>
