module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_vars.scss";`
      }
    }
  },
  chainWebpack(config) {
    const FILE_RE = /\.(vue|js|ts|svg)$/
    config.module.rule('svg').issuer(file => !FILE_RE.test(file))
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  },
  pwa: {
    manifestPath: 'manifest.json',
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://fonts.'),
          handler: 'cacheFirst',
          options: {
            cacheName: 'fonts'
          }
        },
        {
          urlPattern: new RegExp('/img/icons/|favicon|.(png|gif|jpg|jpeg|svg)'),
          handler: 'cacheFirst',
          options: {
            cacheName: 'icons'
          }
        },
        {
          urlPattern: new RegExp('https://my-json-server.'),
          handler: 'networkFirst',
          options: {
            cacheName: 'api-cache'
          }
        }
      ]
    }
  }
}
