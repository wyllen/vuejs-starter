import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../components/layouts/Home'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default : Home
      }
    },
  ],
  mode: 'history',
  base: ''
})

export default router
