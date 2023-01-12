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
    '@nuxt/image-edge',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-icons',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  }
})
