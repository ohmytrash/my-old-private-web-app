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
          <div class="alert alert-danger" v-if="error">
            <h5>FAILED</h5>
            <p class="lead">{{ error }}</p>
          </div>
          <div class="alert alert-primary" v-if="success">
            <h5>SUCCESS</h5>
            <p class="lead">{{ success }}</p>
          </div>
          <form @submit.prevent="submit(form)" method="post" class="row">
            <div class="col-md-6 mb-4">
              <input name="name" v-model="form.name" required type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="col-md-6 mb-4">
              <input name="email" v-model="form.email" required type="email" class="form-control" placeholder="Your Email" />
            </div>
            <div class="col-md-12 mb-4">
              <input name="subject" v-model="form.subject" required type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="col-md-12 mb-4">
              <textarea name="message" v-model="form.message" required class="form-control" rows="8" placeholder="Message"></textarea>
            </div>
            <div class="col-md-12 mb-4">
              <button class="btn btn-dark" :disabled="loading">{{ loading ? 'LOADING' : 'SEND MESSAGE' }}</button>
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
  data() {
    return {
      form: {
        name: '',
        email: '',
        subjetc: '',
        message: ''
      },
      loading: false,
      error: '',
      success: ''
    }
  },
  computed: {
    contact() {
      return this.$store.getters.config.contact
    }
  },
  methods: {
    async submit(form) {
      this.loading = true
      this.error = ''
      this.success = ''
      try {
        await fetch(this.contact.form_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        this.success = 'Email has been sent'
        this.form = {
          name: '',
          email: '',
          subjetc: '',
          message: ''
        }
      } catch (e) {
        this.error = e.message
      }
      this.loading = false
    }
  }
}
</script>
