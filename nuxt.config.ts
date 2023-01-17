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
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide-right',
      mode: 'out-in' // default
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-icons',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Mulish: true,
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  },
})
