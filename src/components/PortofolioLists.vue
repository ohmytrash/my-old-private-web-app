<template>
  <div class="container portofolio-lists">
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
    <ZoomCenterTransition tag="div" class="row mb-5" group>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div class="col-lg-4 col-md-6 my-3" v-for="(item, i) in items" :key="i" v-if="select == item.category || select == 'all'">
        <div class="img-wrap" v-if="mode === 'link'">
          <img :src="item.small_img" alt="img" class="img-fluid d-block w-100" />
          <div class="overlay-wrap">
            <div class="overlay-wrap__content">
              <span class="text-light">{{ item.title }}</span>
              <a :href="item.url" target="_blank" class="btn btn-sm btn-outline-light">DETAIL</a>
            </div>
          </div>
        </div>
        <div class="img-wrap" v-if="mode === 'zoom'">
          <img
            v-preview:slot-gallery
            :data-origin="item.large_img"
            :src="item.small_img"
            :alt="item.title"
            class="img-fluid d-block w-100"
          />
        </div>
      </div>
    </ZoomCenterTransition>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
import createPreviewDirective from 'vue-photoswipe-directive'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'

export default {
  name: 'PortofolioLists',
  components: {
    ZoomCenterTransition
  },
  directives: {
    preview: createPreviewDirective(null, PhotoSwipe, PhotoSwipeUI)
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    filter: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'link'
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
