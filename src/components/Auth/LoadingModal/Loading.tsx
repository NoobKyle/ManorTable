import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonProgressBar } from '@ionic/react';
import './Loading.css';

const Loading: React.FC = () => {

  return (
      <div className='loading'>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Loading</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
              <IonProgressBar type="indeterminate"></IonProgressBar>

              <br/>
              <br/>

              <p>Time management is Life management</p>
              <p>- Phil Mora</p>
          </IonCardContent>
        </IonCard>
      </div>
  );
};

export default Loading;
