import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonCard, 
        IonTextarea, IonButton, IonButtons, IonBackButton, IonItemDivider } from "@ionic/react";
import './SupporPage.css';


defineCustomElements(window);

const StudentAttention: React.FC = () => {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Atención al alumno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark" className="ion-text-center">
      <IonCard>
      <img src="/assets/images/attention-to-the-student.svg" alt="Attention to the student"/> 
        <IonText color="primary"><h2>Atención al alumno</h2></IonText>
        <IonText color="primary">Recibe atención personalizada sobre cualquier incidente que hayas podido tener.</IonText><br></br><br></br>
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

export default StudentAttention;