import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonList, IonRadioGroup, IonListHeader, IonItem, 
        IonRadio, IonTextarea, IonItemDivider, IonButton, IonIcon} from "@ionic/react";
import './Mailbox.css';


defineCustomElements(window);

const Mailbox: React.FC = () => {
    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ITO Responde</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
      </IonContent>
    </IonPage>
    );
};

export default Mailbox;