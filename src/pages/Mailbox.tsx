import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText} from "@ionic/react";
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
      <IonContent fullscreen color="dark">
        <img src="/assets/images/ito-responds.svg" alt="Ito Responds"/>
        <IonText color="primary">¡Bienvenido a ITO Responde!</IonText><br />
        <IonText color="primary">¡Elige el tipo de consulta que deseas hacer y nosotros te ayudamos!</IonText>
      </IonContent>
    </IonPage>
    );
};

export default Mailbox;