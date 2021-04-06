import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { IonContent,IonAlert, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonCard, IonCardSubtitle, IonCardTitle, IonRow,
     IonButton, IonIcon, IonButtons, IonMenuButton, IonModal} from '@ionic/react';
import './Home.css';
import { search, warning } from 'ionicons/icons';
import SearchResults from '../components/SearchResults';

defineCustomElements(window);
const Home: React.FC = () => {

  const history = useHistory();
  const [showAlert, setShowAlert] = useState(true);

  const [showModal, setShowModal] = useState(false);
  async function closeDialog() {
    await setShowModal(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons color="primary" slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>ITO Responde</IonTitle>
          <IonButton slot="end" color="tertiary" className="no-shadow"  onClick={() => setShowModal(true)}>
            <IonIcon  icon={search} slot="icon-only" ></IonIcon>
          </IonButton>
        </IonToolbar>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass=''
          header={'IMPORTANTE:'}
          message={'El soporte para asuntos relacionados con dudas sobre el contenido de las lecciones y las tareas de los módulos, será prestado por los Tutores a través del canal correspondiente de Slack #Preguntas-dudas y en las Sesiones Q&A. No serán respondidas por ITO Responde.'}
          buttons={['OK']}
        />
      </IonHeader>
      <IonContent fullscreen color="dark" className="ion-text-center">


      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <SearchResults   />
      </IonModal>

        <IonRow className="ion-text-justify">
          <IonText color="primary"><IonIcon color="primary" icon={warning}/> <b> IMPORTANTE:</b> 
            El soporte para asuntos relacionados con dudas sobre el contenido de las lecciones y las tareas de los módulos, 
            será prestado por los Tutores a través del canal correspondiente de Slack #Preguntas-dudas y en las Sesiones Q&A. 
            No serán respondidas por ITO Responde.<br/></IonText>
        </IonRow>
        <IonImg src="/assets/images/ito-responds.svg" alt="Ito Responds" />
        <IonText color="primary"><h3>¡Bienvenido a ITO Responde!</h3></IonText>
        <IonText color="primary" text-center><h6>¡Elige el tipo de consulta que deseas hacer y nosotros te ayudamos!</h6></IonText>
       
        <IonCard onClick={() => {history.push('/websupport')}}>
          <img src="/assets/images/web-support.svg" alt="Web support"/>  
          <IonCardTitle>Ayuda con el soporte web</IonCardTitle>
          <IonCardSubtitle>Recibe ayuda con posibles problemas que hayas tenido en la web.</IonCardSubtitle>
        </IonCard>  

        <IonCard onClick={() => {history.push('/mailbox')}}>
          <img src="/assets/images/mailbox-suggestions.svg" alt="Mailbox Suggestions"/>  
          <IonCardTitle>Buzón de sugerencias</IonCardTitle>
          <IonCardSubtitle>Haznos llegar todas tus sugerencias a través de nuestro portal.</IonCardSubtitle>
        </IonCard> 

        <IonCard onClick={() => {history.push('/studentatention')}}>
          <img src="/assets/images/attention-to-the-student.svg" alt="Attention to the student"/>  
          <IonCardTitle>Atención al alumno</IonCardTitle>
          <IonCardSubtitle>Recibe atención personalizada sobre cualquier incidente que hayas podido tener.</IonCardSubtitle>
        </IonCard> 

        <IonCard onClick={() => {history.push('/AdministrativeProcedure')}}>
          <img src="/assets/images/administrative-procedure.svg" alt="Administrative procedure"/>  
          <IonCardTitle>Gestión administrativa</IonCardTitle>
          <IonCardSubtitle>Pregúntanos sobre cualquier detalle relacionado con tu máster.</IonCardSubtitle>
        </IonCard> 

        <IonCard onClick={() => {history.push('/rigths')}}>
          <img src="/assets/images/rights-and-warranty.svg" alt="Rights and warranty"/>  
          <IonCardTitle>Derechos y garantia</IonCardTitle>
          <IonCardSubtitle>Derechos de desistimiento y garantía de resultados.</IonCardSubtitle>
        </IonCard> 


 
      </IonContent>
    </IonPage>
  );
};



export default Home;