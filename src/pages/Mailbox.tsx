import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonCard, 
  IonTextarea, IonButton, IonButtons, IonBackButton, IonItemDivider, IonModal, IonBackdrop } from "@ionic/react";
import './SupporPage.css';
import ModalConfirm from '../components/ModalConfirm';


defineCustomElements(window);

const Mailbox: React.FC = () => {
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
          <IonTitle>Buzón de Sugerencias</IonTitle>
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
        <img src="/assets/images/mailbox-suggestions.svg" alt="Mailbox Suggestions"/>  
        <IonText color="primary"><h2>Buzón de sugerencias</h2></IonText>
        <IonText color="primary">Haznos llegar todas tus sugerencias a través de nuestro portal.</IonText><br></br><br></br>
        <IonLabel><IonText color="danger">*</IonText>Cuentanos brevemente como podemos ayudarte</IonLabel>
        
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

export default Mailbox;