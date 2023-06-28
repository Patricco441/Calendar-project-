import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueTextAreaAutoSize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(vueTextAreaAutoSize)

firebase.initializeApp({
    apiKey: "AIzaSyAd3FeNKT64V5LlZ7Ie4_qLAg5Uxl_LUhM",
    authDomain: "project-data-managment.firebaseapp.com",
    projectId: "project-data-managment",
    storageBucket: "project-data-managment.appspot.com",
    messagingSenderId: "13217576467",
    appId: "1:13217576467:web:50f8db3da45202b29f71e6"
  })

  export const db=firebase.firestore()
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')