import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh09BIl9RYyDue3XIMAt89aJJ0ghi1BaY",
  authDomain: "cntesting-875ff.firebaseapp.com",
  projectId: "cntesting-875ff",
  storageBucket: "cntesting-875ff.appspot.com",
  messagingSenderId: "489323134877",
  appId: "1:489323134877:web:d421e4ca44c0ed70f63974",
  measurementId: "G-XM4EV32XZ9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$fcm = firebase.messaging();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
