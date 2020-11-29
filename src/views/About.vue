<template>
  <div class="about-page py-4">
    <div class="container">
      <PageTitle>About.</PageTitle>
      <div class="row">
        <div class="col-md-3 mb-3">
          <img src="@/assets/img/avatar.jpg" alt="Avatar" class="img-fluid" />
        </div>
        <div class="col-md-6 mb-3 font-weight-light">
          <h5>I’m Dede Ardiansya</h5>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
          <a href="#" class="btn btn-outline-primary">RESUME</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
export default {
  name: 'About',
  components: {
    PageTitle
  }
}
</script>
