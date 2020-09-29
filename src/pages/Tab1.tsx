import React, { useEffect, useState } from 'react';
import {  IonModal, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent } from '@ionic/react';

import './Tab1.css';
import AuthCard from '../components/Auth/AuthCard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules/rootReducer'

import Ad from '../components/Ad/Ad';
import { periodUpdate } from '../store/modules/calendar/action';


const Tab1: React.FC = () => {

  const [showModal, setShowModal] = useState(false );

  const user = useSelector( (state:RootState) => state.user.list.username);
  const authState = useSelector( (state:RootState) => state.user.list.authed);

  const subject = useSelector( (state:RootState) => state.calendar.current.subject);
  const period = useSelector( (state:RootState) => state.calendar.current.period);
  const day = useSelector( (state:RootState) => state.calendar.current.day);
  const upnext = useSelector( (state:RootState) => state.calendar.current.upnext);

  const dispatch = useDispatch();


  function currentPeriod(){
    let today = new Date();
    let currentTime = today.getHours();

    switch( currentTime ){
      case 5:
          return 1
      case 6:
          return 1
      case 7:
          return 1
      case 8:
          return 2
      case 9:
          return 3
      case 10:
          return 4
      case 11:
          return 5
      case 12:
          return 6
      case 13:
          return 7
      case 14:
          return 8
      case 15:
          return 9
      default:
          return 0
    }
  }


  useEffect(() => {
    if( authState === false){
      setShowModal(true);
    }else{
      setShowModal(false);
    }

    dispatch( periodUpdate(currentPeriod()));
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

        <IonCardContent className='mainContent'>
        <div className='main'>
              <IonCardSubtitle className='greeting'>Hey! {user}</IonCardSubtitle>
              <IonCardTitle className='subject'> { subject } </IonCardTitle>
              <IonCardSubtitle className='period'>Period: { period }</IonCardSubtitle>
              <IonCardSubtitle className='day'>Day: { day }</IonCardSubtitle>

              <br/>
              <IonCardSubtitle className='upnext'>Up next: { upnext }</IonCardSubtitle>
        </div>
        </IonCardContent>

        <div className='ad'>
          <Ad />
        </div>


        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <AuthCard/>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
