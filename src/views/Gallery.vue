<template>
  <div class="gallery-page py-4" v-if="gallery">
    <div class="container">
      <PageTitle>{{ gallery.label }}</PageTitle>
    </div>
    <GalleryLists :items="gallery.items" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import GalleryLists from '@/components/GalleryLists'
export default {
  name: 'Gallery',
  components: {
    PageTitle,
    GalleryLists
  },
  computed: {
    gallery() {
      return this.$store.getters.config.gallery
    }
  }
}
</script>
