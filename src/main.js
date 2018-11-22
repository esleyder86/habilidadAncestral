// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(Vuetify, {
  theme: {
    'primary': '#43a047',
    'secondary': '#424242',
    'accent': '#82B1FF',
    'error': '#FF5252',
    'info': '#2196F3',
    'success': '#4CAF50',
    'warning': '#FFC107'
  }
})

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQXfaUlXFQqnJf3OqCJuzgG3jauwgrd8s',
      authDomain: 'angularfirebasebootcamp.firebaseapp.com',
      databaseURL: 'https://angularfirebasebootcamp.firebaseio.com',
      projectId: 'angularfirebasebootcamp',
      storageBucket: 'angularfirebasebootcamp.appspot.com',
      messagingSenderId: '247140884168'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
