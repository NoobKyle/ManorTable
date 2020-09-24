import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput} from '@ionic/react';
import React from 'react';
import './AuthCard.css';


const ComingSoon: React.FC = () => {
  return (
    <div className='comingsoon'>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Sign In </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>Hey! Wonder what class your friends have next?</p>
          <p>Add them here.</p>
          <br/>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <br/>
          <br/>
          <br/>
          <a href='https://www.indiehackers.com/' className='bloglink'>Create Account</a>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ComingSoon;
