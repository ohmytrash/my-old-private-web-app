<template>
  <div class="about-page py-4">
    <div class="container">
      <PageTitle>About.</PageTitle>
      <div class="row">
        <div class="col-md-3 mb-3">
          <img src="@/assets/img/avatar.jpg" alt="Avatar" class="img-fluid" />
        </div>
        <div class="col-md-6 mb-3">
          <h5>I’m Dede Ardiansya</h5>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
          <a href="#" class="btn btn-dark">DOWNLOAD CV</a>
        </div>
      </div>
    </div>
    <div class="container">
      <PageTitle>Experience.</PageTitle>

      <div class="row flex-wrap">
        <div class="col-lg-4 d-flex h-auto ">
          <div class="card card-body bg-transparent w-100 mb-3">
            <h3>Designer at company</h3>
            <small class="small d-block font-weight-bold mb-3">2015 May - 2019 April</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vero exercitationem dolores quam ipsum earum vel sed dolor,
              odio sint vitae amet excepturi recusandae nulla, unde accusantium quia velit accusamus.
            </p>
          </div>
        </div>
        <div class="col-lg-4 d-flex h-auto ">
          <div class="card card-body bg-transparent w-100 mb-3">
            <h3>Designer at company</h3>
            <small class="small d-block font-weight-bold mb-3">2015 May - 2019 April</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vero exercitationem dolores quam ipsum earum vel sed dolor,
            </p>
          </div>
        </div>
        <div class="col-lg-4 d-flex h-auto ">
          <div class="card card-body bg-transparent w-100 mb-3">
            <h3>Designer at company</h3>
            <small class="small d-block font-weight-bold mb-3">2015 May - 2019 April</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vero
              exercitationem dolores quam ipsum earum vel sed dolor,
            </p>
          </div>
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
  },
  mounted() {
    this.$refs.scroll.addEventListener('scroll', () => {
      console.log('scroll')
    })
  }
}
</script>
