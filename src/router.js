import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Cart from './views/Cart'
import Division from './views/Division'
import Mine from './views/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home
    },{
      path:'/cart',
      name:'cart',
      component:Cart
    },{
      path:'/division',
      name:'division',
      component:Division
    },{
      path:'/mine',
      name:'mine',
      component:Mine
    }
  ]
})
