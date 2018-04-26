import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import './styles.scss';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'fr',
    fallbackLocale: "en",
});

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
  i18n,
  router,
  store,
}).$start();
