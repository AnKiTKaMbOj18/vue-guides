import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import { firebaseApp, eventRef } from './firebaseApp.js';

Vue.use(VueRouter);

import store from './store/index.js';
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';

const router =  new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/dashboard", component: Dashboard
    },
    {
      path: "/signin", component: Signin
    },
    {
      path: "/signup", component: Signup
    },
  ]
});

console.log(process.env.VUE_APP_API_KEY)

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
