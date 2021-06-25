<template>
  <div class="auxiliary">
    <Ts>
      <router-view class="page" />
    </Ts>
  </div>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions'
export default {
  name: 'Auxiliary',
  components: {
    Ts: SlideYUpTransition
  }
}
</script>

<style lang="scss" scoped>
.auxiliary {
  overflow-y: hidden;
}
</style>
