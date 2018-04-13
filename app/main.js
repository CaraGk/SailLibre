const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);
const routes = require('./components/Routes');

const router = new VueRouter({
  pageRouting: true,
  routes: routes,
});
router.replace('/home');

new Vue({
  router
}).$start();
