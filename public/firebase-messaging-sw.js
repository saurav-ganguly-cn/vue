importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh09BIl9RYyDue3XIMAt89aJJ0ghi1BaY",
    authDomain: "cntesting-875ff.firebaseapp.com",
    projectId: "cntesting-875ff",
    storageBucket: "cntesting-875ff.appspot.com",
    messagingSenderId: "489323134877",
    appId: "1:489323134877:web:d421e4ca44c0ed70f63974",
    measurementId: "G-XM4EV32XZ9"
};
  
firebase.initializeApp(firebaseConfig);
  
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});