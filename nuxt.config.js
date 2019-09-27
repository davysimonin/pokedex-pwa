require('dotenv').config()

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/pwa'
  ],

  // Redirect automatically to https
  serverMiddleware: [ 'redirect-ssl' ],

  manifest: {
    name: 'PokedexDB',
    description: 'Progressive web app pokedex companion',
    icons: [
      {
        'src': '/icon.png',
        'type': 'image/png',
        'sizes': '512x512'
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
