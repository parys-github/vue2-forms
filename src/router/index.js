import Vue from 'vue';
import Router from 'vue-router';
import StaticSlide from '@/components/StaticSlide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StaticSlide',
      component: StaticSlide
    }
  ]
});
