<template>
  <div class="portfolio-page py-4" v-if="portfolio">
    <div class="container">
      <PageTitle>{{ portfolio.label }}</PageTitle>
    </div>
    <PortfolioFilter :items="portfolio.items" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import PortfolioFilter from '@/components/PortfolioFilter'
export default {
  name: 'Portfolio',
  components: {
    PageTitle,
    PortfolioFilter
  },
  computed: {
    portfolio() {
      return this.$store.getters.config.portfolio
    }
  }
}
</script>
