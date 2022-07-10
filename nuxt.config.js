export default {
  head: {
    title: 'Калькулятор - приложение на Vue & Nuxt.js',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css', rel: 'stylesheet' }
    ]
  },

  css: [
    '~/assets/style.css'
  ],
}
