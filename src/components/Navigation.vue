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
    <a href="#" class="navigation-link mt-auto ml-auto" title="Night Mode">
      <MoonIcon width="18" />
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: $white;
  width: 60px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: auto;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
  }

  @include media-breakpoint-down(md) {
    height: 60px;
    width: 100%;
    bottom: 0;
    top: auto;
    flex-direction: row;
  }

  .navigation-link {
    position: relative;
    display: block;
    padding: 15px;
    width: 60px;
    height: 60px;
    line-height: 30px;
    text-align: center;
    color: $gray-500;

    &.brand {
      background-color: rgba($gray-100, 0.5);
      color: $primary;
    }

    &.active,
    &:hover {
      color: $primary;
    }
  }
}
</style>
