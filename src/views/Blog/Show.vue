<template>
  <div class="blog-page py-4" v-if="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="blog-card card border-0">
            <v-lazy-image :src="blog.img" :src-placeholder="Placeholder" :alt="blog.title" class="img-fluid" />
            <div class="card-header p-3 ">
              <h1 class="h2 blog-title m-0">{{ blog.title }}</h1>
              <span class="d-block small">{{ new Date(blog.created_at).toDateString() }}</span>
            </div>
            <div class="card-body" v-html="blog.body" />
            <div class="card-header d-flex p-1">
              <router-link
                :to="{ name: 'BlogShow', params: { slug: link.prev } }"
                v-if="link.prev"
                class="btn btn-block m-0"
                :class="$store.getters.isDarkMode ? 'btn-dark' : 'btn-light'"
                title="PREV POST"
                ><ChevronsLeftIcon width="20"
              /></router-link>
              <button
                type="button"
                v-else
                disabled
                class=" btn btn-block m-0"
                :class="$store.getters.isDarkMode ? 'btn-dark' : 'btn-light'"
                title="PREV POST"
              >
                <ChevronsLeftIcon width="20" />
              </button>
              <router-link
                :to="{ name: 'BlogShow', params: { slug: link.next } }"
                v-if="link.next"
                class="btn btn-block m-0"
                :class="$store.getters.isDarkMode ? 'btn-dark' : 'btn-light'"
                title="NEXT POST"
                ><ChevronsRightIcon width="20"
              /></router-link>
              <button
                type="button"
                v-else
                disabled
                class=" btn btn-block m-0"
                :class="$store.getters.isDarkMode ? 'btn-dark' : 'btn-light'"
                title="NEXT POST"
              >
                <ChevronsRightIcon width="20" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 lates-posts-card">
            <div class="card-header font-weight-bold">Lates Posts</div>
            <div class="list-group">
              <router-link
                :to="{ name: 'BlogShow', params: { slug: blogs.items[i-1].slug } }"
                v-for="i in count"
                :key="blogs.items[i-1].slug"
                class="border-left-0 border-right-0 border-top-0  list-group-item"
                :class="blogs.items[i-1].slug !== slug ? 'list-group-item-action' : 'this-active'"
              >
                {{ blogs.items[i-1].title }}
              <span class="d-block small">{{ new Date(blogs.items[i-1].created_at).toDateString() }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Placeholder from '@/assets/img/hero-large.jpg'
export default {
  name: 'BlogShow',
  data() {
    return {
      Placeholder,
      blog: null,
      link: {
        prev: null,
        next: null
      }
    }
  },
  computed: {
    blogs() {
      return this.$store.getters.config.blog
    },
    slug() {
      return this.$route.params.slug
    },
    count() {
      if(this.blogs.items) {
        if(this.blogs.items.length > 8) {
          return 8
        }
        return this.blogs.items.length
      }
      return 0
    }
  },
  methods: {
    setBlog(blogs) {
      try {
        this.blog = blogs.items.filter((el, i) => {
          if (el.slug == this.slug) {
            if (i - 1 >= 0) {
              this.link.prev = blogs.items[i - 1].slug
            } else {
              this.link.prev = null
            }
            if (i + 1 < blogs.items.length) {
              this.link.next = blogs.items[i + 1].slug
            } else {
              this.link.next = null
            }
            return true
          }
          return false
        })[0]
        if (!this.blog) {
          this.$router.push('/404')
        }
      } catch (e) {
        this.$router.push('/404')
      }
    }
  },
  watch: {
    blogs: {
      immediate: true,
      handler(blogs) {
        if (blogs) {
          this.setBlog(blogs)
        }
      }
    },
    slug(val) {
      console.log(val)
      if (this.blogs) {
        this.setBlog(this.blogs)
      }
    }
  }
}
</script>

<style lang="scss">
.blog-card {
  background-color: $white;
  .blog-title {
    color: $dark;
  }
}
.lates-posts-card {
  background-color: $white;
  .list-group-item {
    background-color: transparent;
    color: $dark;
    &.this-active, &:hover {
      background-color: rgba($primary, .1);
    }
  }
}
.dark-mode {
  .blog-card {
    background-color: $dark;
    .blog-title {
      color: $white;
    }
  }
  .lates-posts-card {
    background-color: $dark;
    .list-group-item {
      background-color: transparent;
      color: $white;
      &.this-active, &:hover {
        background-color: rgba($primary, .1);
      }
    }
  }
}
</style>
