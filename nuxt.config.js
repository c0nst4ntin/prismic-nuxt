import PrismicConfig from "./prismic.config.js";
import Prismic from "prismic-javascript";

/**
 * Find all documents for dynamic types and
 * return the urls
 */
const dynamic_routes = () => {
  let posts = Prismic.getApi(PrismicConfig.apiEndpoint)
    .then(api => api.query(Prismic.Predicates.at("document.type", "post")))
    .then(response => {
      return response.results.map(post => {
        const posturl = `blog/${post.uid.replace(/_/g, "/")}`;
        return posturl;
      })
    })
  return Promise.all([posts]).then(values => {
    return [...values[0]];
  })
}

export default {
  mode: 'universal',
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
    "~/assets/scss/styles.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/componentimporter.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: dynamic_routes
  }
}
