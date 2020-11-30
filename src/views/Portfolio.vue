<template>
  <div class="portfolio-page py-4">
    <div class="container">
      <PageTitle>Portfolio.</PageTitle>
    </div>
    <PortfolioFilter />
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
  }
}
</script>
