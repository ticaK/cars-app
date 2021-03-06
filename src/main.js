import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppCars from './components/AppCars'
import AddCar from './components/AddCar'


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/', redirect:'/cars'},
  {path:'/cars', component: AppCars},
  {path:'/add', component: AddCar},
  {path:'/edit/:id', component: AddCar, name: 'edit'}
   
]


const router = new VueRouter({
  routes: routes,
  mode:'history'
  
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')