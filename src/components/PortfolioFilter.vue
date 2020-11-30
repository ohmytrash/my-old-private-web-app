<template>
  <div class="container portfolio-filter">
    <div class="nav">
      <a href="#" @click.prevent="select = 'all'" :class="{ active: select == 'all' }" class="nav-link">All</a>
      <a
        href="#"
        @click.prevent="select = item"
        :class="{ active: select == item }"
        class="nav-link"
        v-for="(item, i) in categories"
        :key="i"
        >{{ item }}</a
      >
    </div>
    <ZoomCenterTransition tag="div" class="row mb-5" group>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div class="col-lg-4 col-md-6 my-3" v-for="(item, i) in items" :key="i" v-if="select == item.category || select == 'all'">
        <div class="img-wrap">
          <img :src="item.img + '?id=' + i" alt="img" class="img-fluid d-block w-100" />
          <div class="overlay-wrap">
            <div class="overlay-wrap__content">
              <span class="text-light">{{ item.text }}</span>
              <a :href="item.url" target="_blank" class="btn btn-outline-light">DETAIL</a>
            </div>
          </div>
        </div>
      </div>
    </ZoomCenterTransition>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
export default {
  name: 'PortfolioFilter',
  components: {
    ZoomCenterTransition
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      select: 'all',
      categories: []
    }
  },
  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.length) {
          this.categories = [...new Set(val.map(item => item.category))]
        }
      }
    }
  }
}
</script>
