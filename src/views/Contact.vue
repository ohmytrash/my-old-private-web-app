<template>
  <div class="contact-page py-4">
    <div class="container">
      <PageTitle>Contact.</PageTitle>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-3 text-lg-left text-center">
          <div class="mb-4">
            <h5>ADDRESS STREET</h5>
            <p class="small">
              Address : No 221B Down Street <br />
              Landon, United Kingdom.
            </p>
          </div>
          <div class="mb-4">
            <h5>
              MOBILE PHONE
            </h5>
            <p class="small">
              Phone 1: 0(1234) 567 890
              <br />
              Phone 2: 0(987) 567 890
            </p>
          </div>
          <div class="mb-4">
            <h5>
              ADDRESS EMAIL
            </h5>
            <p class="small">
              <a href="#">info@yourdomain.com</a>
              <br />
              <a href="#">yourname@yourdomain.com</a>
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <form action="#" class="row">
            <div class="col-md-6 mb-4">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="col-md-6 mb-4">
              <input type="text" class="form-control" placeholder="Your Email" />
            </div>
            <div class="col-md-12 mb-4">
              <input type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="col-md-12 mb-4">
              <textarea class="form-control" rows="8" placeholder="Message"></textarea>
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
  }
}
</script>
