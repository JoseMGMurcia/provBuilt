import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon, IonCard } from '@ionic/react';
import './Modal.css';


type ModalProps = {
    closeAction: Function;
    okAction: Function;
    mainText: string;
    title: string;
  }

class ModalConfirm extends React.Component<ModalProps> {

   render() {
       return <>
        
      <IonContent className="ion-padding">
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>{this.props.title}</IonTitle>
            <IonButtons slot="end">
                <IonButton onClick={() => this.props.closeAction()}>
                <IonIcon name="close" slot="icon-only"></IonIcon>
                </IonButton>
            </IonButtons>
            </IonToolbar>
        </IonHeader>
            <p>{this.props.mainText}</p>
                <IonButton color="tertiary" onClick={() => this.props.closeAction()}>CANCELAR</IonButton>
                <IonButton color="primary"onClick={() => this.props.okAction()}>OK</IonButton>
      </IonContent>
       </>
   }
}
export default ({closeAction, okAction, text, title}: { closeAction: Function, okAction: Function, text: string, title: string }) => (
    <ModalConfirm closeAction={closeAction} okAction={okAction} mainText={text} title={title}>
    </ModalConfirm>
)


