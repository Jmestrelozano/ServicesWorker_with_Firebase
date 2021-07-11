
 importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js");


firebase.initializeApp({
    apiKey: "AIzaSyBtAKzWi4D60QATuxzlfx25tJAqlaIijw0",
    projectId: "servicesworkernotificaciones",
    messagingSenderId: "1092962785614",
    appId: "1:1092962785614:web:1452fe0b1b0c9a18f5661f",
})
const messaging = firebase.messaging();


if ('serviceWorker' in navigator) {
    window.addEventListener('load' , async () => {
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js',{
            updateViaCache: 'none',
            scope:""
        })
        messaging.useServiceWorker(registration);
        messaging.onMessage((payload) => {
            const title = payload.notification.title;
            const option = {
                body: payload.notification.body,
                icon: payload.notification.icon,
                actions:[
                    {
                        action:payload.fcmOptions.link,
                        title: 'Notificació de Licopolis'
                    }
                ]
            }
            registration.showNotification(title, option)
        })
    })


    }

messaging.onBackgroundMessage((payload)=>{
   console.log('[firebase-messaging-sw.js] Received background message ', payload);
   // Customize notification here

   const notificationTitle = 'Background Message Title';
   const notificationOptions = {
       body: 'Background Message body.',
       icon: '/firebase-logo.png',
   };

   // self.registration.showNotification(notificationTitle,
   //     notificationOptions);
})

    self.addEventListener('notificationclick', (event) => {
        if(event.action){
            clients.openWindow(event.action)
        }
        event.notification.close();
    })

