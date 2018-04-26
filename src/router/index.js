import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Converter from '../components/Converter';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/converter',
      component: Converter,
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
});

router.replace('/home');

module.exports = router;
