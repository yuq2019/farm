import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import '@/mock/mock.js'
Vue.config.productionTip = false

import { Button,CellGroup,Field,Tab,Tabs,NavBar,Icon,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload} from 'vant';
Vue.use(Button).use(CellGroup).use(Field).use(Tab).use(Tabs).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
