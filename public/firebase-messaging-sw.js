// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
    apiKey: "AIzaSyCkKsnRX3xLUGZEHR4ULkmZwGRnNC4V8ww",
    authDomain: "chatsi-realtime-laravel-f3ce6.firebaseapp.com",
    projectId: "chatsi-realtime-laravel-f3ce6",
    storageBucket: "chatsi-realtime-laravel-f3ce6.appspot.com",
    messagingSenderId: "5742079653",
    appId: "1:5742079653:web:dfb63b07c1d32e123ce74c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const {title, body} = payload.notification;
    const notificationOptions = {
        body,
    };

    return self.registration.showNotification(title,
        notificationOptions);
});