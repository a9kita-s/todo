

import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';   // here!
Vue.use(VueMeteorTracker);                           // here!

import router from '/client/routes.js'

import App from './App.vue';
import './main.html';

Meteor.startup(() => {
  new Vue({
    router : router,
    el : '#app',
    render: h => h(App),
  }).$mount('#app');
});
