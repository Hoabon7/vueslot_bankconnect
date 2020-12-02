import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {routes} from './routes'


Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const router=new VueRouter({
  mode: 'history',
  routes
});



new Vue({
  render: h => h(App),
  store,  
  router,//trung voi ten cua bien const
}).$mount('#app')
