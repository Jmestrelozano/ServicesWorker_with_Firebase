
import firebase from 'firebase/app'
import "firebase/messaging"
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>


  export const firebaseConfig = {
    apiKey: "AIzaSyBtAKzWi4D60QATuxzlfx25tJAqlaIijw0",
    authDomain: "servicesworkernotificaciones.firebaseapp.com",
    projectId: "servicesworkernotificaciones",
    storageBucket: "servicesworkernotificaciones.appspot.com",
    messagingSenderId: "1092962785614",
    appId: "1:1092962785614:web:1452fe0b1b0c9a18f5661f",
    measurementId: "G-YVZNGD7NTP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  export  {messaging};