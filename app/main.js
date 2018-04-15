const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);
const routes = require('./components/Routes');
const VueI18n = require('vue-i18n');
Vue.use(VueI18n);

const router = new VueRouter({
  pageRouting: true,
  routes: routes,
});
router.replace('/home');

const i18n = new VueI18n();

new Vue({
  i18n,
  router,
}).$start();
