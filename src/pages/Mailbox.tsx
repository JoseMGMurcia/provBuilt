import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonCard, 
  IonRadio, IonTextarea, IonButton,IonButtons,IonBackButton } from "@ionic/react";
import './Mailbox.css';


defineCustomElements(window);

const Mailbox: React.FC = () => {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Buzón de Sugerencias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark" className="ion-text-center">
      <IonCard>
        <img src="/assets/images/mailbox-suggestions.svg" alt="Mailbox Suggestions"/>  
        <IonText color="primary"><h2>Buzón de sugerencias</h2></IonText>
        <IonText color="primary">Haznos llegar todas tus sugerencias a través de nuestro portal.</IonText><br></br><br></br>
        <IonLabel><IonText color="danger">*</IonText>Cuentanos brevemente como podemos ayudarte</IonLabel>
        <IonTextarea rows={6} placeholder="Escribe aqui tu mensaje" onIonChange={e => console.log("sending messaje") }></IonTextarea>
         <IonToolbar>
          <IonButton slot="end" color="tertiary">CANCELAR</IonButton>
          <IonButton slot="end" color="primary">ENVIAR</IonButton>
         </IonToolbar>
        </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default Mailbox;