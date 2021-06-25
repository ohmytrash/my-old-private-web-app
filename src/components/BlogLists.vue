<template>
  <div class="blog-lists">
    <div class="container">
      <div class="nav">
        <router-link to="?c=all" :class="{ active: select == 'all' }" class="nav-link">All</router-link>
        <router-link
          :to="'?c=' + item"
          :class="{ active: select == item }"
          class="nav-link"
          v-for="(item, i) in categories"
          :key="i"
          >{{ item }}</router-link
        >
      </div>

      <ZoomCenterTransition tag="div" class="row mb-5" group>
        <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
        <div class="col-lg-4 col-md-6 my-3" v-for="(item, i) in items" :key="i" v-if="select == item.category || select == 'all'">
          <router-link class="img-wrap" :to="{ name: 'BlogShow', params: { slug: item.slug } }" :title="item.title">
            <span class="ribbon">{{ item.category }}</span>
            <v-lazy-image :src="item.img" :src-placeholder="Placeholder" :alt="item.title" class="img-fluid d-block w-100" />
            <div class="py-1">
              <h4 class="item-title text-truncate">{{ item.title }}</h4>
              <span class="item-date">{{ new Date(item.created_at).toDateString() }}</span>
            </div>
          </router-link>
        </div>
      </ZoomCenterTransition>
    </div>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'
import Placeholder from '@/assets/img/hero-thumb.jpg'
export default {
  name: 'BlogLists',
  components: {
    ZoomCenterTransition
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      Placeholder,
      select: 'all',
      categories: []
    }
  },
  watch: {
    items: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.length) {
          this.categories = [...new Set(val.map(item => item.category))]
        }
      }
    },
    $route: {
      immediate: true,
      handler({ query }) {
        if(query.c && this.categories.indexOf(query.c) >= 0) {
          this.select = query.c
        } else {
          this.select = 'all'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.blog-lists {
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
    display: block;
    padding: 5px;
    background-color: $white;

    .ribbon {
      position: absolute;
      display: block;
      z-index: 10;
      line-height: 1;
      font-size: 12px;
      padding: 3px 5px;
      background-color: $white;
      color: $dark;
      font-weight: $font-weight-bold;
      text-transform: uppercase;
      top: 10px;
      left: 10px;
    }

    img {
      filter: grayscale(50);
      transition: filter 200ms;
    }
    .item-title {
      color: $dark;
      font-size: 0.875rem;
      margin: 0;
      text-transform: capitalize;
      transition: color 200ms;
    }
    .item-date {
      display: block;
      line-height: 1;
      font-weight: $font-weight-light;
      font-size: 0.625rem;
      color: $gray-400;
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
      .item-title {
        color: $primary;
      }
    }
  }
}

.dark-mode {
  .blog-lists {
    .nav-link {
      color: $gray-300;
      &:hover,
      &.active {
        color: $primary;
      }
    }

    .img-wrap {
      background-color: $dark;

      .ribbon {
        background-color: $dark;
        color: $white;
      }

      .item-title {
        color: $white;
      }
      .item-date {
        color: $gray-400;
      }

      &:hover {
        .item-title {
          color: $primary;
        }
      }
    }
  }
}
</style>
