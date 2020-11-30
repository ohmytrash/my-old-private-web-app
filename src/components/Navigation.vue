<template>
  <nav class="navigation">
    <router-link :to="{ name: 'Home' }" class="navigation-link brand mb-auto mr-auto" title="Home">
      <BrandIcon width="30" />
    </router-link>
    <router-link :to="{ name: 'Home' }" exact-active-class="active" class="navigation-link d-none d-md-block" title="Home">
      <HomeIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'About' }" exact-active-class="active" class="navigation-link" title="About">
      <UserIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'Portfolio' }" exact-active-class="active" class="navigation-link" title="Portfolio">
      <GridIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'Contact' }" exact-active-class="active" class="navigation-link" title="Contact">
      <MailIcon width="18" />
    </router-link>
    <a href="#" @click.prevent="changeTheme" class="navigation-link mt-auto ml-auto" title="Night Mode">
      <MoonIcon width="18" v-if="!$store.state.darkMode" />
      <SunIcon width="18" v-else />
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    changeTheme() {
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>
