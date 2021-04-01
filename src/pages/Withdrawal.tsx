import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, 
         IonButtons, IonBackButton } from "@ionic/react";
import './SupporPage.css';


defineCustomElements(window);

const Withdrawal: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Derecho de Desistimiento</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent fullscreen color="dark" className="ion-text-center">
       

        <IonCard>

      
       

        </IonCard>



      </IonContent>
    </IonPage>
    );
};

export default Withdrawal;