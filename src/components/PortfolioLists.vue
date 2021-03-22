<template>
  <div class="container portfolio-lists">
    <div class="nav" v-if="filter">
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
    <ZoomCenterTransition tag="div" class="row mb-5 no-gutters" group>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div class="col-lg-4 col-md-6" v-for="(item, i) in items" :key="i" v-if="select == item.category || select == 'all'">
        <div class="img-wrap">
          <img :src="item.image" alt="img" class="img-fluid d-block w-100" />
          <div class="overlay-wrap">
            <div class="overlay-wrap__content">
              <span class="text-light text-truncate">{{ item.title }}</span>
              <a :href="item.url" target="_blank" class="text-light">DETAIL</a>
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
  name: 'PortfolioLists',
  components: {
    ZoomCenterTransition
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    filter: {
      type: Boolean,
      default: true
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
