import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonCard, 
        IonTextarea, IonButton, IonButtons, IonBackButton, IonItemDivider } from "@ionic/react";
import './SupporPage.css';


defineCustomElements(window);

const AdministrativeProcedure: React.FC = () => {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Gestión administrativa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark" className="ion-text-center">
      <IonCard>
      <img src="/assets/images/administrative-procedure.svg" alt="Administrative procedure"/>  
        <IonText color="primary"><h2>Gestión administrativa</h2></IonText>
        <IonText color="primary">Pregúntanos sobre cualquier detalle relacionado con tu máster.</IonText><br></br><br></br>
        <IonLabel> <IonText color="danger">*</IonText>Cuentanos brevemente como podemos ayudarte</IonLabel>

        <IonTextarea 
          rows={6} 
          placeholder="Escribe aqui tu mensaje" 
          className="ion-text-left"
          onIonChange={e => console.log("sending messaje") }>
        </IonTextarea>

        <IonItemDivider/>

         <IonToolbar>
          <IonButton slot="end" color="tertiary">CANCELAR</IonButton>
          <IonButton slot="end" color="primary">ENVIAR</IonButton>
         </IonToolbar>
        </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default AdministrativeProcedure;