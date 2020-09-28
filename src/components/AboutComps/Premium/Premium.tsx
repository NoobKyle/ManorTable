import React from 'react';
import './Premium.css';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonText } from '@ionic/react';


const Premium: React.FC = () => {

  return (
    <div>
        <IonCardHeader>
            <IonCardTitle><strong>Go Premium</strong></IonCardTitle>
            <IonCardSubtitle>On our app</IonCardSubtitle>
        </IonCardHeader>

        <br />
        <br />

        <IonImg src="https://miro.medium.com/proxy/1*8l__qu6I7hIZLLnnzrGcLQ.png" />

        <br />

        <IonText>
            <h5>How it Works</h5>

            <p>Connect your friends calendars and stuff.</p>
        </IonText>
    </div>
  );
};

export default Premium;
