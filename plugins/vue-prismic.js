import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver'
import apiEndpoint from '../prismic.config'

Vue.use(PrismicVue, {   
        endpoint: apiEndpoint,
        linkResolver
    });