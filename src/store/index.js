import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import lang from './modules/lang';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    lang,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
