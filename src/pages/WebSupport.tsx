import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText} from "@ionic/react";
import './WebSupport.css';


defineCustomElements(window);

const WebSupport: React.FC = () => {
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

export default WebSupport;