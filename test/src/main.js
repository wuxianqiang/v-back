import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VBack from './v-back'

Vue.config.productionTip = false
Vue.use(VBack)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
