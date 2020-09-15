import { IonText, IonTitle } from '@ionic/react';
import React from 'react';
import './ComingSoon.css';


const ComingSoon: React.FC = () => {
  return (
    <div className='comingsoon'>
      <IonTitle>Coming Soon</IonTitle>

      <br/>
      
      <IonText>
        <p>Hey! Wonder what class your friends have next?</p>
        <p>Add them here.</p>
      </IonText>
    </div>
  );
};

export default ComingSoon;
