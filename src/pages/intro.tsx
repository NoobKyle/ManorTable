import React from 'react';
import { IonContent,  IonPage } from '@ionic/react';
import './intro.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>

       <div className='introLogo' >
          <p>
            <a href='https://google.com' className='moreapps'>More apps</a>
          </p>
       </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
