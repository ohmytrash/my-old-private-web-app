<template>
  <div class="container">
    <div class="nav">
      <a href="#" @click.prevent="select = 'all'" :class="{ active: select == 'all' }" class="nav-link">All</a>
      <a href="#" @click.prevent="select = 'Mockup'" :class="{ active: select == 'Mockup' }" class="nav-link">Mockup</a>
      <a href="#" @click.prevent="select = 'Busines'" :class="{ active: select == 'Busines' }" class="nav-link">Busines</a>
      <a href="#" @click.prevent="select = 'Design'" :class="{ active: select == 'Design' }" class="nav-link">Design</a>
    </div>
    <ZoomCenterTransition tag="div" class="row mb-5" group>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <div class="col-lg-4 col-md-6 my-3" v-for="(item, i) in items" :key="i" v-if="select == item.category || select == 'all'">
        <div class="img-wrap">
          <img :src="item.img + '?id=' + i" alt="img" class="img-fluid d-block" />
          <div class="overlay-wrap">
            <a href="#" class="btn btn-outline-light">DETAIL</a>
          </div>
        </div>
      </div>
    </ZoomCenterTransition>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
export default {
  name: 'PortfolioFilter',
  components: {
    ZoomCenterTransition
  },
  data() {
    return {
      select: 'all',
      items: [
        {
          category: 'Mockup',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Busines',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Mockup',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Design',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Busines',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Busines',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Mockup',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Busines',
          img: 'https://picsum.photos/400/400'
        },
        {
          category: 'Design',
          img: 'https://picsum.photos/400/400'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 0;
}
.nav-link {
  color: $gray-700;
  &:first-child {
    padding-left: 0;
  }

  &:hover,
  &.active {
    color: $primary;
  }
}

.img-wrap {
  position: relative;
  overflow: hidden;

  .overlay-wrap {
    background-color: rgba($dark, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    transition: transform 500ms ease-out;
    transform: translateY(-100%);

    .btn {
      margin: auto;
      opacity: 0;
      transform: translateY(100%);
      transition: 300ms ease-out;
      transition-delay: 400ms;
    }
  }

  &:hover {
    .overlay-wrap {
      transform: translateY(0%);

      .btn {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
}
</style>
