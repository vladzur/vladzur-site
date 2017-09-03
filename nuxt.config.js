module.exports = {
  /*
  ** Mode
  */
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vladzur',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vladzur\'s site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0066cc', height: '5px' },
  /*
  ** Global css
  */
  css: [{src: '~assets/sass/app.scss', lang: 'scss'}],
  /*
  ** Build configuration
  */
  router: {
    linkExactActiveClass: 'is-active'
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
