<template>
  <div class="portfolio-lists">
    <div class="container">
      <a class="portfolio-list" :href="item.url" target="_blank" v-for="(item, i) in items" :key="i">
        <div class="img-wrap">
          <img :src="item.img" :alt="item.text" class="img-fluid w-100" />
        </div>
        <h2>{{ item.text }}</h2>
        <p>{{ item.type }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioLists',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
