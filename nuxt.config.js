export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'คำนวนวันลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ',
    htmlAttrs: {
      lang: 'th'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
          
      {
        name: "description",
        content:  "อย่าให้ความไม่รู้ ทำให้ท่านพลาดสิทธิ"
      },
      {
        name: "keywords",
        content: ["เงินยังชีพ", "เงินผู้สูงอายุ", "เงินชราภาพ", "เงินคนแก้", "เบี้ยคนแก้"]
      },

      { name: "rotots", content: "index,follow" },
      { name: "author", content: "คำนวนวันลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ" },

      {
        hid: "og:image",
        property: "og:image",
        content: "https://elderly-pension.pages.dev/og.jpg"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "คำนวนวันลงทะเบียนรับเงินเบี้ยยังชีพผู้สูงอายุ"
      },
      { hid: "og:url", property: "og:url", content: "https://elderly-pension.pages.dev/" },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://elderly-pension.pages.dev/og.jpg"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "อย่าให้ความไม่รู้ ทำให้ท่านพลาดสิทธิ"
      },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap', },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round', },
      { rel: 'stylesheet', href: "https://czp.dga.or.th/cportal/sdk/css/v1/trunks.min.css" },    
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/site.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
