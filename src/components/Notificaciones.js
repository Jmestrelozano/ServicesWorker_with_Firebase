import React from 'react'
import { messaging } from '../configFirebase/firebase';

export const Notificaciones = () => {

    // navigator.serviceWorker.register('serviceWorker.js').then(registration => {
    //     registration.pushManager.subscribe({userVisibleOnly: true}).then(subscription => {
    //       registration.showNotification('Hola Mundo');
    //       console.log(subscription.endpoint);
    //     })
    //   })

    messaging.requestPermission().then(()=>{
        const token =  messaging.getToken()
        return token
    }).then((token)=>{
      
        console.log('token firebase:',token)
    }).catch((err)=>{
        alert("Permita las notificaciones")
        console.log(err)
    })
      
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                 MI NOTIFACION CON SERVICES WORKER Y FIREBASE
            </h1>
           
        </div>
    )
}
