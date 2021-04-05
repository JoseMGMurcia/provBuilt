import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonText, IonLabel, IonCard, 
         IonTextarea, IonButton, IonButtons, IonBackButton, IonItemDivider, IonImg, IonModal } from "@ionic/react";
import ModalConfirm from '../components/ModalConfirm';


defineCustomElements(window);

const Rights: React.FC = () => {

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
          <IonTitle>Derechos y garantía</IonTitle>
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

        <IonImg src="/assets/images/rights-and-warranty.svg" alt="Mailbox Suggestions"/>  
        <IonText color="primary"><h2>Derechos y garantía</h2></IonText>
        <IonText color="primary"><h6>Derechos de desistimiento y garantía de resultados.</h6></IonText>
        
      <IonCard>
        <IonText color="primary" ><h3 >Derechos y garantía</h3></IonText>
        <IonText color="primary" className="ion-text-justify" >
          <h6>El alumno acepta expresamente que NO podrá ejercitar dicho derecho,
              de desistimiento, una vez transcurridos los 14 días naturales desde 
              el pago total o el pago del primer plazo si ésta es la forma elegida.
        </h6></IonText>
          <IonButton color="primary"onClick={() => {history.push("/rigths/withdrawal")}}>DERECHO DE DESISTIMIENTO</IonButton>
          <IonText color="primary"><h6>Puedes revisar los requisitos <a href="">aqui</a></h6></IonText>
      </IonCard>
      <IonCard>
        <IonText color="primary"><h3>Garantía de resultados</h3></IonText>
        <IonText color="primary" className="ion-text-justify" >
          <h6>Para ejercer esta garantía contarás con 15 días naturales a partir de 
            que acabe el máster para demostrarnos que has seguido el paso a paso 
            propuesto por el ITO y no has conseguido ningún cliente de pago.
        </h6></IonText>
          <IonButton color="tertiary" disabled>GARANTÍA DE RESULTADOS</IonButton>
          <IonText color="primary"><h6>Puedes revisar los requisitos <a href="">aqui</a></h6></IonText>
      </IonCard>
      <IonCard className="ion-text-start">
        <IonLabel > <IonText color="danger">*</IonText>¿Tienes alguna duda? Escríbenos y te responderemos.</IonLabel>
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

export default Rights;