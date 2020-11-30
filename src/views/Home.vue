<template>
  <div class="home-page" v-if="home" :style="`--bg-image: url(${home.bg_url})`">
    <div class="home-page__wrapper">
      <h1 class="home-page__title">
        {{ home.app_name }} <span aria-hidden="true">{{ home.app_name }}</span>
      </h1>
      <p class="home-page__subtitle mb-5 text-uppercase">{{ home.app_title }}</p>
      <div class="home-page__socials">
        <a :href="item.url" target="_blank" v-for="(item, i) in home.socials" :key="i">{{ item.label }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    home() {
      return this.$store.getters.config.home
    }
  }
}
</script>
