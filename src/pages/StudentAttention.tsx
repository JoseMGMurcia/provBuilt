import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonCard, 
        IonTextarea, IonButton, IonButtons, IonBackButton, IonItemDivider, IonModal } from "@ionic/react";
import './SupporPage.css';
import ModalConfirm from '../components/ModalConfirm';


defineCustomElements(window);

const StudentAttention: React.FC = () => {

   const [showModal, setShowModal] = useState(false);
    const history = useHistory();
  
    async function closeDialog() {
      await setShowModal(false);
    }

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

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <ModalConfirm 
            closeAction={closeDialog}
            okAction ={() => {setShowModal(false); history.push('/')}}
            text="¿Seguro que desea cancelar, se perderán todos los datos?"
            title="Cancelar"/>
      </IonModal>

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
         <IonButton slot="end" color="tertiary" onClick={() => setShowModal(true)}>CANCELAR</IonButton>
          <IonButton slot="end" color="primary">ENVIAR</IonButton>
         </IonToolbar>
        </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default StudentAttention;