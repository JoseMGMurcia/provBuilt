import {IonApp, IonMenu, IonHeader, IonToolbar, IonImg, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle, IonRouterOutlet, IonText, IonSelect, IonSelectOption, IonItemDivider, IonItemGroup, IonFabList, IonFabButton, IonFab } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import AppRoutes from './routes';
import { home, flask, calendarClear, bulb, checkmarkCircle, documentText, videocam, tv, chevronDown, chevronUp } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import React, { useState } from "react";



const App: React.FC = () => {

const [arrowUp, setArrowUp] = useState(false);


return (
  <IonApp >
    <IonReactRouter>
      <IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar color= 'primary'>
            <IonImg className="icon-ito" src="/assets/icon/ico-ito.png" alt="Ito Responds"/>
          </IonToolbar>
        </IonHeader>
          <IonContent className="app-content" color= 'primary'>
            <IonList className="list-menu">
              <IonMenuToggle >
                <IonItem routerLink="/home" routerDirection="none" lines="none">
                  <IonIcon color="medium" slot="start" icon={home}/>
                    <IonText color="medium">Inicio</IonText>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle >
                <IonItem  routerLink="/home" routerDirection="none" lines="none">
                  <IonIcon color="medium" slot="start" icon={flask}/>
                  <IonText color="medium">Curso</IonText>
                </IonItem>
              </IonMenuToggle>
              
              <IonMenuToggle >
                <IonItem  routerLink="/home" routerDirection="none" lines="none">
                  <IonIcon color="medium" slot="start" icon={bulb}/>
                  <IonText color="medium">Wiki</IonText>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle >
                <IonItem  routerLink="/home" routerDirection="none" lines="none">
                  <IonIcon color="medium" slot="start" icon={checkmarkCircle}/>
                  <IonText color="medium">Correcciones</IonText>
                </IonItem>
              </IonMenuToggle>
            <IonFab  >
              <IonItem  routerLink="/home" routerDirection="none" lines="none" onClick={() => setArrowUp(!arrowUp)}>
                  <IonIcon color="medium" slot="start" icon={calendarClear}/>
                  <IonText color="medium">Sesiones</IonText>
                  <IonIcon icon={chevronDown} slot="end" color="medium" hidden={arrowUp}></IonIcon>
                  <IonIcon icon={chevronUp} slot="end" color="medium" hidden={!arrowUp}></IonIcon>
              </IonItem>
                <IonFabList className="displaced">
                  <IonMenuToggle >
                    <IonItem  routerLink="/home" routerDirection="none" lines="none">
                      <IonIcon color="medium" slot="start" icon={documentText}/>
                      <IonText color="medium">Agenda de Sesiones</IonText>
                    </IonItem>
                  </IonMenuToggle>
                  <IonMenuToggle >
                    <IonItem  routerLink="/home" routerDirection="none" lines="none">
                      <IonIcon color="medium" slot="start" icon={videocam}/>
                      <IonText color="medium">Sesiones Grabadas</IonText>
                    </IonItem>
                  </IonMenuToggle>
                  <IonMenuToggle >
                    <IonItem  routerLink="/home" routerDirection="none" lines="none">
                      <IonIcon color="medium" slot="start" icon={tv}/>
                      <IonText color="medium">Sesión Ininterrumpida</IonText>
                    </IonItem>
                  </IonMenuToggle>
                  </IonFabList>
                </IonFab>
                </IonList>

            <IonList className="list-supp">
                <IonItem  routerLink="/home" routerDirection="none" lines="none">
                  <IonImg className="icon-supp"src="/assets/icon/support_icon.png" alt="Ito Responds"/>
                </IonItem>
            </IonList>
          </IonContent>
      </IonMenu>
      <AppRoutes/>
    </IonReactRouter>
  </IonApp>
);}
export default App;