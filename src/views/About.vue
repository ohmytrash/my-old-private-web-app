<template>
  <div class="about-page py-4" v-if="about">
    <div class="container">
      <PageTitle>{{ about.label }}</PageTitle>
      <div class="row">
        <div class="col-md-3 mb-3">
          <img :src="about.img_url" alt="Avatar" class="img-fluid" />
        </div>
        <div class="col-md-6 mb-3">
          <h5>{{ about.heading }}</h5>
          <div v-html="about.body"></div>
          <h5 class="mt-4">{{ about.id.heading }}</h5>
          <div v-html="about.id.body"></div>
          <router-link :to="{ name: 'Contact' }" class="btn btn-dark">Contact me</router-link>
        </div>
      </div>
    </div>
    <div class="container mt-5" v-if="about.experience">
      <h2>{{ about.experience.title }}</h2>
      <div class="row flex-wrap">
        <div class="col-lg-4 d-flex h-auto" v-for="(item, i) in about.experience.items" :key="i">
          <div class="card card-body bg-transparent w-100 mb-3">
            <h3>{{ item.title }}</h3>
            <small class="small d-block font-weight-bold mb-3">{{ item.date }}</small>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
export default {
  name: 'About',
  components: {
    PageTitle
  },
  computed: {
    about() {
      return this.$store.getters.config.about
    }
  }
}
</script>
