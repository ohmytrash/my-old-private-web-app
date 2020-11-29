<template>
  <div class="home-page">
    <div class="home-page__wrapper">
      <h1 class="display-2 text-dark font-weight-light">DEDE ARDIANSYA</h1>
      <p class="lead mb-5 text-dark text-uppercase">Web developer from makassar indonesia</p>
      <div class="home-page__socials">
        <a href="#">GH</a>
        <a href="#">IG</a>
        <a href="#">WA</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  display: flex;
  padding: 30px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    top: 30px;
    left: 30px;
    background-image: url('../assets/img/main-bg.jpg');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    filter: grayscale(50%);
    opacity: 0.4;

    @include media-breakpoint-down(md) {
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
    }
  }

  &__wrapper {
    position: relative;
    margin: auto;
    width: 100%;
    z-index: 2;
    text-align: center;
    padding: 15px;
  }

  &__socials {
    display: flex;
    justify-content: center;
    a {
      display: block;
      padding: $spacer;
      color: $gray-800;
      font-weight: $font-weight-bold;
      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
