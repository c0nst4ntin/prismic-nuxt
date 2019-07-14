import Vue from 'vue'
import lodash from 'lodash'
import importComponents from 'vue-component-importer'

let components = require.context('@/components/slices', true, /[a-zA-Z]\w+\.(vue)$/)
importComponents(lodash, Vue, components)