<template>
  <div class="home-page">
    <div class="home-page__wrapper">
      <h1 class="home-page__title">DEDEARD <span aria-hidden="true">DEDEARD</span></h1>
      <p class="home-page__subtitle mb-5 text-uppercase">Web developer from makassar indonesia</p>
      <div class="home-page__socials">
        <a href="#">BEHENCE</a>
        <a href="#">INSTAGRAM</a>
        <a href="#">DRIBBBLE</a>
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

  &__title {
    position: relative;
    @include font-size(6rem);
    color: $dark;
    font-weight: $font-weight-light;
    margin-bottom: 1rem;
    span {
      white-space: normal;
      position: absolute;
      font-weight: $font-weight-bold;
      width: 100%;
      top: -20%;
      left: 0;
      transform: scale(2);
      opacity: 0.05;
      // transform: translateX(-50%);
    }
  }

  &__subtitle {
    @include font-size(1rem);
    @include media-breakpoint-down(md) {
      @include font-size(0.9rem);
    }
    color: $dark;
  }

  &__socials {
    display: flex;
    justify-content: center;
    a {
      display: block;
      padding: 0.6em;
      color: $gray-800;
      @include font-size(0.875rem);
      @include media-breakpoint-down(md) {
        @include font-size(0.8125rem);
      }
      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
