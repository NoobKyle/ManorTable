import React, { useState } from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonLabel,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonList,  IonCard, IonModal, IonButton } from '@ionic/react';
import './Tab3.css';

import Share from '../components/AboutComps/Share/ShareCard';
import Premium from '../components/AboutComps/Premium/Premium';
import HelpCard from '../components/AboutComps/Help/HelpCard';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/modules/rootReducer';
import { Auth } from '../store/modules/user/action';

const Tab3: React.FC = () => {

  var [ showShareCard, setShowShareCard ] = useState(false);
  var [ showHelpCard, setShowHelpCard ] = useState(false);
  var [ showPremium, setShowPremium ] = useState(false)

  const user = useSelector( (state:RootState) => state.user.list.username);

  const dispatch = useDispatch();

  function signOUt(){
      localStorage.removeItem('authed');
      localStorage.removeItem('username');
      localStorage.removeItem('day');
      localStorage.removeItem('calendar');

      dispatch( Auth('noUser', 1, false));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem >
          <IonAvatar>
            <img src='https://source.unsplash.com/random' alt=""/>
          </IonAvatar>

          <IonCardHeader>
            <IonCardTitle>{user}</IonCardTitle>
            <IonCardSubtitle>Free Member</IonCardSubtitle>
          </IonCardHeader>
        </IonItem>

        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { window.location.reload(false)}} href='/'>
            <IonLabel>
              Refresh
            </IonLabel>
          </IonItem>
        </IonList>

          <br/>
          <br/>

        <IonList>
          <IonItem button onClick={() => { setShowPremium(true) }} detail>
            <IonLabel>
              Premium Membership
            </IonLabel>
          </IonItem>
          <IonModal isOpen={showPremium} cssClass='my-custom-class'>
            <Premium />
            <IonButton expand="block" fill="clear" onClick={() => setShowPremium(false)}> Close </IonButton>
          </IonModal>


          <IonItem button onClick={() => { setShowShareCard( true ) }} detail>
            <IonLabel>
              Tell a Friend
            </IonLabel>
          </IonItem>
          <IonModal isOpen={showShareCard} cssClass='my-custom-class'>
            <Share />
            <IonButton expand="block" fill="clear" onClick={() => setShowShareCard(false)}> Close </IonButton>
          </IonModal>
        </IonList>

        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { setShowHelpCard( true ) }} detail>
            <IonLabel>
              Help
            </IonLabel>
          </IonItem>
          <IonModal isOpen={showHelpCard} cssClass='my-custom-class'>
            <HelpCard/>
            <IonButton expand="block" fill="clear" onClick={() => setShowHelpCard(false)}> Close </IonButton>
          </IonModal>


          <IonItem button onClick={() => { }} href="https://buymeacoffee.com/kylet" target="_blank">
            <IonLabel>
              Buy me a Coffee
            </IonLabel>
          </IonItem>
        </IonList>

        <br />
        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { signOUt() }} href='/'>
            <IonLabel>
              Sign Out
            </IonLabel>
          </IonItem>
        </IonList>

        <br />

        <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>Kyle Made This!!</IonCardSubtitle>
              <IonCardSubtitle>Copyright &#169; 2020, All Rights Reserved</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
