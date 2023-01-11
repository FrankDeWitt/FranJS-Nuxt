// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: "FranJS - My portfolio",
      meta: [
        // <meta name="description" content="My amazing portfolio">
        { name: 'description', content: 'My amazing portfolio.' }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-icons',
  ],
  colorMode: {
    classSuffix: ''
  },
})
