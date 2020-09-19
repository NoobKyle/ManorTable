import React from 'react';
import './Premium.css';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonText } from '@ionic/react';


const Premium: React.FC = () => {

  return (
    <div>
        <IonCardHeader>
            <IonCardTitle><strong>Get Featured</strong></IonCardTitle>
            <IonCardSubtitle>On our app</IonCardSubtitle>
        </IonCardHeader>

        <br />
        <br />

        <IonImg src="https://miro.medium.com/proxy/1*8l__qu6I7hIZLLnnzrGcLQ.png" />

        <br />

        <IonText>
            <h5>How it Works</h5>

            <p>Get more viewrs on your youtube channel by getting featured on our app.</p>
        </IonText>
    </div>
  );
};

export default Premium;