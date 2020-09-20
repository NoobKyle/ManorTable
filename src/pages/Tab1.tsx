import React, { useEffect } from 'react';
import { IonList, IonLabel, IonItem, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules/rootReducer'

import Ad from '../components/Ad/Ad';
import { periodUpdate } from '../store/modules/calendar/action';

const Tab1: React.FC = () => {

  const subject = useSelector( (state:RootState) => state.calendar.current.subject);
  const period = useSelector( (state:RootState) => state.calendar.current.period);
  const day = useSelector( (state:RootState) => state.calendar.current.day);
  const upnext = useSelector( (state:RootState) => state.calendar.current.upnext);

  const dispatch = useDispatch();


  function currentPeriod(){
    let today = new Date();
    let currentTime = today.getHours();

    switch( currentTime ){
      case 8:
          return 1
      case 9:
          return 2
      case 10:
          return 3
      case 11:
          return 4
      case 12:
          return 5
      case 13:
          return 6
      case 14:
          return 7
      case 15:
          return 8
      case 16:
          return 9
      default:
          return 0
    }
  }



  useEffect(() => {

    dispatch( periodUpdate( currentPeriod() ));

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
              <IonCardTitle className='subject'> { subject } </IonCardTitle>
              <IonCardSubtitle className='period'>Period: { period }</IonCardSubtitle>
              <IonCardSubtitle className='day'>Day: { day }</IonCardSubtitle>

              <br/>
              <IonCardSubtitle className='upnext'>Up next: { upnext }</IonCardSubtitle>
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
