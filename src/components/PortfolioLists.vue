<template>
  <div class="portfolio-lists">
    <div class="container">
      <a class="portfolio-list" :href="item.url" target="_blank" v-for="(item, i) in items" :key="i">
        <div class="img-wrap">
          <v-lazy-image :src="item.img" :src-placeholder="Placeholder" :alt="item.text" class="img-fluid w-100" />
        </div>
        <h2>{{ item.text }}</h2>
        <p>{{ item.type }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import Placeholder from '@/assets/img/hero-large.jpg'
export default {
  name: 'PortfolioLists',
  data() {
    return {
      Placeholder
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
