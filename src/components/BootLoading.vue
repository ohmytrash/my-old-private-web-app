<template>
  <div class="loading">
    <div class="m-auto loading-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss">
.loading {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $white;
  z-index: 9999;
  opacity: 1 !important;

  &-wrap {
    width: 100px;
    text-align: center;
    svg {
      display: inline-block;
      stroke: $dark;
    }
  }
}

.dark-mode {
  .loading {
    background-color: $gray-900;
    &-wrap {
      svg {
        stroke: $white;
      }
    }
  }
}
</style>
