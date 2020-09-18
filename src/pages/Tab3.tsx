import React, { useState } from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonLabel,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonList,  IonCard, IonModal, IonButton } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {

  var [ showShareCard, setShowShareCard ] = useState(false);
  var [ showHelpCard, setShowHelpCard ] = useState(false);
  var [ showYoutubePromo, setShowYoutubePromo ] = useState(false)

  
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
            <IonCardTitle>Kyle</IonCardTitle>
            <IonCardSubtitle>Hello</IonCardSubtitle>
          </IonCardHeader>
        </IonItem>

        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { }} detail>
            <IonLabel>
              YouTube Channel Promo
            </IonLabel>
          </IonItem>
          <IonModal isOpen={showYoutubePromo} cssClass='my-custom-class'>
            <p> hello </p>
            <IonButton expand="block" fill="clear" onClick={() => setShowYoutubePromo(false)}> Close </IonButton> 
          </IonModal>


          <IonItem button onClick={() => { setShowShareCard( true ) }} detail>
            <IonLabel>
              Tell a Friend
            </IonLabel>
          </IonItem>
          <IonModal isOpen={showShareCard} cssClass='my-custom-class'>
            <p>hello </p>
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
            <p>hello </p>
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
          <IonItem button onClick={() => {}} href='/'>
            <IonLabel>
              Sign Out
            </IonLabel>
          </IonItem>
        </IonList>

        <br />

        <IonCard>    
          <IonCardHeader>
              <IonCardSubtitle>Knights Class Table</IonCardSubtitle>
              <IonCardSubtitle>Copyright &#169; 2020, All Rights Reserved</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
