import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

import ComingSoon from '../components/ComingSoon/ComingSoon';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Friends</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ComingSoon />

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
