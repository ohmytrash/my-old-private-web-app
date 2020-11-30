<template>
  <h1 class="page-title">
    <slot /> <span><slot /></span>
  </h1>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  @include font-size(10rem);
  padding: 1em 0 0.5em;
  font-weight: $font-weight-bold;
  @include media-breakpoint-down(md) {
    @include font-size(7rem);
  }

  span {
    position: absolute;
    left: 0;
    font-size: 1.5em;
    opacity: 0.025;
    white-space: nowrap;
  }
}
</style>
