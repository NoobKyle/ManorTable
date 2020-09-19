import React from 'react';
import './HelpCard.css';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';


const HelpCard: React.FC = () => {

  return (
    <div>
        <IonCardHeader>
            <IonCardTitle><strong>Help</strong></IonCardTitle>
            <IonCardSubtitle>Learn more about this platform</IonCardSubtitle>
        </IonCardHeader>

        <br />
        <br />

        <IonList lines="none">
            <IonItem>
                <IonIcon name="cog-outline"></IonIcon>
                <IonLabel>How it works</IonLabel>
            </IonItem>

            <br />

            <IonItem>
                <IonIcon name="brush-outline"></IonIcon>
                <IonLabel>Get featured</IonLabel>
            </IonItem>

            <br />

            <IonItem>
                <IonIcon name="build-outline"></IonIcon>
                <IonLabel>How Tripher was built</IonLabel>
            </IonItem>

            <br />

            <IonItem>
                <IonIcon name="archive-outline"></IonIcon>
                <IonLabel>Feedback</IonLabel>
            </IonItem>
        </IonList>
    </div>
  );
};

export default HelpCard;