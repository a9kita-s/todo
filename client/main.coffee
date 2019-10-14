

import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)

import router from '/client/routes.coffee'

import App from './App.vue'
import './main.html'

Meteor.startup ->
  new Vue({
    router: router
    el: '#app'
    render: (h) -> h(App)
  }).$mount('#app')
