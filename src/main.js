import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(vueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyApd4m1iEF-LQtHEWEfdnqRjMRtvbnsKIk",
  authDomain: "calendar-3a6f6.firebaseapp.com",
  databaseURL: "https://calendar-3a6f6.firebaseio.com",
  projectId: "calendar-3a6f6",
  storageBucket: "calendar-3a6f6.appspot.com",
  messagingSenderId: "579949139435",
  appId: "1:579949139435:web:53a83f83c8aa5acf4675ae"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
