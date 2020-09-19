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
          console.log('8')
          break
      case 9:
          console.log('9')
          break
      case 10:
          console.log('10')
          break
      case 11:
          console.log('11')
          break
      case 12:
          console.log('12')
          break
      case 13:
          console.log('13')
          break
      case 14:
          console.log('14')
          break
      default:
    }
  }



  useEffect(() => {

    // dispatch( periodUpdate( currentPeriod() )); 
    currentPeriod();
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
