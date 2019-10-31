import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from './components/NotFoundComponent.vue'
import Works from './components/Works.vue'
import Work from './components/Work.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'works',
      component: Works
    },
    {
      path: '/work/:slug',
      name: 'work',
      component: Work
    },
    { 
      path: '*', 
      name : '404',
      component: NotFoundComponent 
    }
  ]

})
