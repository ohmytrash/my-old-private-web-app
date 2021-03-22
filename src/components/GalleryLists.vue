<template>
  <div class="container gallery-lists">
    <div class="col-lg-4 col-md-6 my-3" v-for="(item, i) in items" :key="i">
      <div class="img-wrap">
        <img v-preview:slot-gallery :data-origin="item.large_img" :src="item.small_img" :alt="item.title" class="img-fluid d-block w-100" />
      </div>
    </div>
  </div>
</template>

<script>
import createPreviewDirective from 'vue-photoswipe-directive'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'

export default {
  name: 'GalleryLists',
  directives: {
    preview: createPreviewDirective(null, PhotoSwipe, PhotoSwipeUI)
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
