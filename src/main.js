//append element wrapper for chat widget
const appWrapper = document.createElement('div')
appWrapper.id = "app"
document.body.appendChild(appWrapper)


window.SETTINGS = {
  API: 'http://URL'
}

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import App from './App.vue'
import store from './store'
import router from './router'

import './scss/app.scss'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
