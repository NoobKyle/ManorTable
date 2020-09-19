import React, { useEffect } from 'react';
import { IonList, IonLabel, IonItem, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules/rootReducer'

import Ad from '../components/Ad/Ad';

const Tab1: React.FC = () => {

  const name = useSelector( (state:RootState) => state.user.list.name);
  const dispatch = useDispatch();

  useEffect(() => {
    
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Manor Table</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='main'>
              <IonCardSubtitle className='greeting'>Hey! Kyle</IonCardSubtitle>
              <IonCardTitle className='subject'>Mathematics</IonCardTitle>
              <IonCardSubtitle className='period'>Period: 4</IonCardSubtitle>
              <IonCardSubtitle className='day'>Day: 5</IonCardSubtitle>

              <br/>
              <IonCardSubtitle className='upnext'>Up next: Life Science</IonCardSubtitle>
        </div>

        <div className='ad'>
          <Ad />
        </div>

        <IonList lines='none'>
          <IonItem>
            <IonLabel>P1: English</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>P2: Mathematics</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>P3: Physics</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>P4: Life Science</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>BREAK</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pro Feature Required</IonLabel>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
