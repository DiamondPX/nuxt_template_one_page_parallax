const webpack = require("webpack");

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    noscript: [{ innerHTML: 'Scripts are not supported', body: true }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: '/css/one-page-parallax/app.min.css' },
    ],
    script: [
      { src: '/js/jquery.min.js', body: true },
      { src: '/js/jquery-ui.min.js', body: true },
      { src: '/js/bootstrap.bundle.min.js', body: true },
      { src: '/js/jquery.paroller.min.js', body: true },
      { src: '/js/js.cookie.js', body: true },
      { src: '/js/pace.min.js', body: true },
      { src: '/js/scrollMonitor.js', body: true },
      { src: '/js/app.js', body: true },
    ],
    bodyAttrs: { 'data-spy':'scroll', 'data-target':'#header', 'data-offset':'51' }
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/robots',
    [
      'nuxt-twa-module',
      {
        /* module options */
        defaultUrl: 'https:////nuxtjs-pwa-boilerplate.vercel.app/',
        hostName: 'https://nuxtjs-pwa-boilerplate.vercel.app/',
        applicationId: 'com.example.nuxt',
        launcherName: 'Nuxt TWA',
        versionCode: 1,
        versionName: '1.0',
        statusBarColor: '#fff',
        // The sha256Fingerprints by is an array with one SHA-256 key string.
        // But if you have multiple you can add them to the array. More information about the website asociation:
        // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
        sha256Fingerprints: ['/* your SHA-256 keys */'],
        /* optional */
        /* overwrite default location for icon */
        iconPath: '/static/icon.png',
        /* Overwrite folder where to put .wellknown */
        distFolder: '.nuxt/dist/client',
      },
    ],
    [
      '@nuxtjs/pwa',
      {
        workbox: {
          clientClaims: false,
        },
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  manifest: {
    name: 'Nuxt PWA',
    lang: 'en',
    orientation: 'portrait',
    background_color: '#FFFFFF',
    theme_color: '#F8F8F8',
  },
}
