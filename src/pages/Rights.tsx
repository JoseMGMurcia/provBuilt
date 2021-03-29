import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText} from "@ionic/react";
import './Rights.css';


defineCustomElements(window);

const Rights: React.FC = () => {
    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ITO Responde</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
       
      </IonContent>
    </IonPage>
    );
};

export default Rights;