<template>
  <div class="portfolio-page py-4" v-if="portfolio">
    <div class="container">
      <PageTitle>{{ portfolio.label }}</PageTitle>
    </div>
    <div class="container pb-4" v-if="!hide">
      <div class="row mb-2">
        <div class="col-8">
          <h3>Portfolio setting</h3>
        </div>
        <div class="col-4 text-right">
          <button class="btn border" @click="hide = true">HIDE SETTING</button>
        </div>
      </div>
      <label>Mode</label>
      <div class="card card-body mb-2 p-0">
        <select v-model="mode" class="form-control">
          <option value="link">LINK</option>
          <option value="zoom">ZOOM</option>
        </select>
      </div>
      <label>Category filter</label>
      <div class="card card-body p-0">
        <select v-model="filter" class="form-control">
          <option value="1">True</option>
          <option value="0">False</option>
        </select>
      </div>
    </div>
    <PortfolioLists :filter="getFilter" mode="link" :items="portfolio.items" v-if="mode === 'link'" />
    <PortfolioLists :filter="getFilter" mode="zoom" :items="portfolio.items" v-if="mode === 'zoom'" />
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
  data() {
    return {
      filter: 1,
      mode: 'zoom',
      hide: false
    }
  },
  computed: {
    portfolio() {
      return this.$store.getters.config.portfolio
    },
    getFilter() {
      return Number(this.filter)
    }
  }
}
</script>
