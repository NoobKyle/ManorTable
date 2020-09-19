import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonTitle } from '@ionic/react';
import React from 'react';
import './ComingSoon.css';


const ComingSoon: React.FC = () => {
  return (
    <div className='comingsoon'>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Coming Soon</IonCardTitle>          
        </IonCardHeader>

        <IonCardContent>
          <p>Hey! Wonder what class your friends have next?</p>
          <p>Add them here.</p>
          <a href='https://www.indiehackers.com/' className='bloglink'>Site Update Blog</a>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ComingSoon;