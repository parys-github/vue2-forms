// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
require('vue2-animate/dist/vue2-animate.min.css');

Vue.use(ElementUI);
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});

