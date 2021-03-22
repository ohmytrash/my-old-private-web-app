<template>
  <nav class="navigation" v-if="navigation">
    <span class="change-theme-transition" aria-hidden="true" ref="transition">
      <div class="m-auto">
        <p class="lead">
          <span class="text-dark">{{ navigation.light_mode }} -</span>
          <span class="text-light">- {{ navigation.dark_mode }}</span>
        </p>
      </div>
    </span>
    <router-link :to="{ name: 'Home' }" class="navigation-link brand mb-auto mr-auto" :title="navigation.home">
      <!-- <BrandIcon width="30" /> -->
      <img src="@/assets/img/brand.png" alt="logo dedeard" height="30" />
    </router-link>
    <router-link :to="{ name: 'Home' }" exact-active-class="active" class="navigation-link d-none d-md-block" :title="navigation.home">
      <HomeIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'About' }" exact-active-class="active" class="navigation-link" :title="navigation.about">
      <UserIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'Portfolio' }" exact-active-class="active" class="navigation-link" :title="navigation.portfolio">
      <GridIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'Gallery' }" exact-active-class="active" class="navigation-link" :title="navigation.gallery">
      <ImageIcon width="18" />
    </router-link>
    <router-link :to="{ name: 'Contact' }" exact-active-class="active" class="navigation-link" :title="navigation.contact">
      <MailIcon width="18" />
    </router-link>
    <a
      href="#"
      @click.prevent="changeTheme"
      class="navigation-link mt-auto ml-auto"
      :title="$store.getters.isDarkMode ? navigation.light_mode : navigation.dark_mode"
    >
      <MoonIcon width="18" v-if="!$store.getters.isDarkMode" />
      <SunIcon width="18" v-else />
    </a>
  </nav>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'Navigation',
  computed: {
    navigation() {
      return this.$store.getters.config.navigation
    }
  },
  methods: {
    changeTheme() {
      this.$refs.transition.style.transform = 'translateY(-110%)'
      anime
        .timeline({
          targets: this.$refs.transition,
          duration: 1000,
          easing: 'easeInOutCirc'
        })
        .add({
          translateY: '0%',
          complete: () => {
            this.$store.dispatch('toggleTheme')
          }
        })
        .add({
          delay: 750,
          translateY: '110%'
        })
    }
  }
}
</script>
