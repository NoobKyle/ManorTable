import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton } from '@ionic/react';
import './AuthCard.css';

import { Auth } from '../../store/modules/user/action';
import { GetCalendar } from '../../store/modules/calendar/action';
import { useDispatch } from 'react-redux';

const ComingSoon: React.FC = () => {

  const dispatch = useDispatch();

   const [username, setUsername] = useState<string>();
   const [day, setDay] = useState<number>();

   async function registerUSer(){
       console.log('Process: Registering User');
       let a = dispatch(Auth( username, day, true));

       await a;
       await setTimeout(() => { refreshPage('/') } , 5000);
   }

   function refreshPage( route:string ){
       window.location.href = route;
   }

  return (
    <div className='comingsoon'>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Sign In </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>Hey There!</p>
          <p>Please enter a valid registered username and current school day to continue.</p>
          <br/>

          <IonItem>
            <IonInput value={username} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)}></IonInput>
          </IonItem>
          <br/>
          <IonItem>
           <IonInput type="number" value={day} placeholder="Day" onIonChange={e => setDay(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <br/>
          <br/>

          <IonButton onClick={() => { registerUSer(); }}>Login</IonButton>
          <br/>
          <br/>
          <br/>
          <a href='/' className='bloglink'>Create Account</a>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ComingSoon;
