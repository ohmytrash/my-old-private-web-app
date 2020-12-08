<template>
  <div class="portfolio-page py-4" v-if="portfolio">
    <div class="container">
      <PageTitle>{{ portfolio.label }}</PageTitle>
    </div>
    <PortfolioLists :items="portfolio.items" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import PortfolioLists from '@/components/PortfolioLists'
export default {
  name: 'Portfolio',
  components: {
    PageTitle,
    PortfolioLists
  },
  computed: {
    portfolio() {
      return this.$store.getters.config.portfolio
    }
  }
}
</script>
