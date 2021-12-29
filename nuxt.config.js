const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES'
  ? {
      router: {
        base: '/Charlie-Profile/',
      },
    }
  : {};

export default {
  ...routerBase,
  head: {
    title: "Charlie's Profile",
    htmlAttrs: {
      lang: 'zh-Hant-TW',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // 為了避免子組件中的meta標簽不能正確覆蓋父組件中相同的標簽而產生重覆的現象，利用hid鍵為meta標簽配一個唯一的標識
      { name: 'description', content: "Charlie's Profile Introduction", hid: 'description' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    authKey_part1: 'ghp_',
    authKey_part2: '4RnbXvuY5hH8LhImZE1jQbxr7hFj590pitdd',
  },
};
