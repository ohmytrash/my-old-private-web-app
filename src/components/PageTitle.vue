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
  padding: 0.5em 0;
  font-weight: $font-weight-bold;

  span {
    position: absolute;
    left: 0;
    font-size: 1.5em;
    opacity: 0.05;
    white-space: nowrap;
  }
}
</style>
