<template>
  <div class="blog-page py-4" v-if="blog">
    <div class="container">
      <PageTitle>{{ blog.label }}</PageTitle>
    </div>
    <BlogLists :items="blog.items" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import BlogLists from '@/components/BlogLists'
export default {
  name: 'Blog',
  components: {
    PageTitle,
    BlogLists
  },
  computed: {
    blog() {
      return this.$store.getters.config.blog
    }
  }
}
</script>
