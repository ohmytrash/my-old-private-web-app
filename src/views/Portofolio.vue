<template>
  <div class="portofolio-page py-4" v-if="portofolio">
    <div class="container">
      <PageTitle>{{ portofolio.label }}</PageTitle>
    </div>
    <div class="container pb-4" v-if="!hide">
      <div class="row mb-2">
        <div class="col-8">
          <h3>Portofolio setting</h3>
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
    <PortofolioLists :filter="getFilter" mode="link" :items="portofolio.items" v-if="mode === 'link'" />
    <PortofolioLists :filter="getFilter" mode="zoom" :items="portofolio.items" v-if="mode === 'zoom'" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import PortofolioLists from '@/components/PortofolioLists'
export default {
  name: 'Portofolio',
  components: {
    PageTitle,
    PortofolioLists
  },
  data() {
    return {
      filter: 1,
      mode: 'zoom',
      hide: false
    }
  },
  computed: {
    portofolio() {
      return this.$store.getters.config.portofolio
    },
    getFilter() {
      return Number(this.filter)
    }
  }
}
</script>
