import React, { useState } from 'react';
import './ShareCard.css';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonAvatar,  IonButton, IonToast } from '@ionic/react';


const ShareCard: React.FC = () => {

  const [showToast1, setShowToast1] = useState(false);

  function copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }



  return (
    <div>
      <IonCardHeader>
        <IonCardTitle><strong>Tell a Friend</strong></IonCardTitle>
        <IonCardSubtitle>Get the word about this awesome app going!</IonCardSubtitle>
      </IonCardHeader>

      <br />
      <br />

      <IonList>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <img src="data:image/png;base64,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" />
            </IonAvatar>
            <IonButton expand="block" fill="clear" onClick={() => {copyMessage('Hey! Check out tthis app which lets you watch youtube videos based on your current mood.'); setShowToast1(true)} }>Copy Link</IonButton>
          </IonItem>

          <br />

          <IonItem lines="none">
            <IonAvatar slot="start">
              <img src="https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" />
            </IonAvatar>
            <IonButton expand="block" fill="clear" href="https://api.whatsapp.com/send?text=Hey!%20Check%20out%20this%20app%20which%20lets%20you%20watch%20youtube%20videos%20based%20on%20your%20current%20mood." target="_blank">WhatsApp</IonButton>
             
          </IonItem>

          <br />

          <IonItem lines="none">
            <IonAvatar slot="start">
              <img src="https://pbs.twimg.com/profile_images/1242271512381571072/AYXTj2vl_400x400.png" />
            </IonAvatar>
            <IonButton expand="block" fill="clear" href="https://twitter.com/intent/tweet?text=Hey!%20Check%20out%20this%20app%20which%20lets%20you%20watch%20youtube%20videos%20based%20on%20your%20current%20mood." target="_blank">Twitter</IonButton>
          </IonItem>

          <IonToast
            isOpen={showToast1}
            onDidDismiss={() => setShowToast1(false)}
            message="Link Copied"
            duration={200}
          />

      </IonList>
    </div>
  );
};

export default ShareCard;
