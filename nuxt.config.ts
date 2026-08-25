// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
	content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: 'dracula',
        }
      }
    }
  }
})
