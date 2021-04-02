import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonList, IonRadioGroup, IonListHeader, IonItem, 
  IonRadio, IonTextarea, IonItemDivider, IonButton, IonCard, IonButtons, IonBackButton, IonModal} from "@ionic/react";
import './SupporPage.css';
import ModalConfirm from '../components/ModalConfirm';



defineCustomElements(window);

const WebSupport: React.FC = () => {
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
          <IonTitle>ITO Responde</IonTitle>
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
      <img src="/assets/images/web-support.svg" alt="Mailbox Suggestions"/>  
        <IonText color="primary"><h2>Ayuda con el soporte web</h2></IonText>
        <IonText color="primary">Recibe ayuda con posibles problemas que hayas tenido en la web.</IonText><br></br><br></br>
        <IonList className="ion-text-left">
          <IonRadioGroup>
            <IonListHeader>
              <IonLabel><IonText color="danger">*</IonText>Seleccione el motivo de la consulta</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>No puedo acceder a los módulos</IonLabel>
              <IonRadio value="access" />
            </IonItem>

            <IonItem>
              <IonLabel>No puedo ver mis correcciones</IonLabel>
              <IonRadio value="corrections" />
            </IonItem>

            <IonItem>
              <IonLabel>No se me reproducen los vídeos</IonLabel>
              <IonRadio value="video" />
            </IonItem>

            <IonItem>
              <IonLabel>No puedo cambiar mi estado en la plataforma</IonLabel>
              <IonRadio value="status" />
            </IonItem>

            <IonItem>
              <IonLabel>Tengo problemas con el mail de acceso al Máster</IonLabel>
              <IonRadio value="mail" />
            </IonItem>

            <IonItem>
              <IonLabel>No puedo acceder a Slack</IonLabel>
              <IonRadio value="slack" />
            </IonItem>

            <IonItem>
              <IonLabel>Ninguna de las anteriores</IonLabel>
              <IonRadio value="other" />
            </IonItem>
          </IonRadioGroup>
         </IonList>
          
         <IonLabel><IonText color="danger">*</IonText>Cuentanos brevemente como podemos ayudarte</IonLabel>
         <IonTextarea 
          rows={6} 
          placeholder="Escribe aqui tu mensaje" 
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

export default WebSupport;