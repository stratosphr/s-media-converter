import axios   from 'axios'
import Vue     from 'vue'
import App     from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import router  from './router'
import store   from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:3333'
Vue.prototype.axios = axios

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
