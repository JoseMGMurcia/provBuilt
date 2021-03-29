import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonList, IonRadioGroup, IonListHeader, IonItem, 
  IonRadio, IonTextarea, IonItemDivider, IonButton, IonIcon} from "@ionic/react";
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
      <IonContent fullscreen>
        <img src="/assets/images/web-support.svg" alt="Mailbox Suggestions"/>  
        <IonText color="primary">Ayuda con el soporte web</IonText>
        <IonText color="primary">Recibe ayuda con posibles problemas que hayas tenido en la web.</IonText>
        <IonList>
          <IonRadioGroup>
            <IonListHeader>
              <IonLabel>Seleccione el motivo de la consulta</IonLabel>
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
          
         <IonLabel>Cuentanos brevemente como podemos ayudarte</IonLabel>
         <IonTextarea rows={6} placeholder="Escribe aqui tu mensaje" onIonChange={e => console.log("sending messaje") }></IonTextarea>


         <IonItemDivider/>
         <IonToolbar>
        
          <IonButton slot="end" color="tertiary">CANCELAR</IonButton>
          <IonButton slot="end" color="primary">ENVIAR</IonButton>
         </IonToolbar>

      </IonContent>
    </IonPage>
    );
};

export default WebSupport;