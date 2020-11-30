<template>
  <div class="contact-page py-4" v-if="contact">
    <div class="container">
      <PageTitle>{{ contact.label }}</PageTitle>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-3 text-lg-left text-center">
          <div class="mb-4" v-for="(item, i) in contact.info" :key="i">
            <h5>{{ item.label }}</h5>
            <p class="small" v-html="item.items.join('<br />')"></p>
          </div>
        </div>
        <div class="col-lg-8">
          <form :action="contact.form_url" method="post" class="row">
            <div class="col-md-6 mb-4">
              <input name="name" type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="col-md-6 mb-4">
              <input name="email" type="text" class="form-control" placeholder="Your Email" />
            </div>
            <div class="col-md-12 mb-4">
              <input name="subject" type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="col-md-12 mb-4">
              <textarea name="message" class="form-control" rows="8" placeholder="Message"></textarea>
            </div>
            <div class="col-md-12 mb-4">
              <button class="btn btn-dark">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
export default {
  name: 'Contact',
  components: {
    PageTitle
  },
  computed: {
    contact() {
      return this.$store.getters.config.contact
    }
  }
}
</script>
