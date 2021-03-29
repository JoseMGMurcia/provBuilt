import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonCard, IonCardSubtitle, IonCardTitle, IonRow, IonCol, IonThumbnail} from '@ionic/react';
import './Home.css';

defineCustomElements(window);

const Home: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ITO Responde</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <IonImg src="/assets/images/ito-responds.svg" alt="Ito Responds" />
        <IonRow>
          <IonCol className="ion-text-center">
            <IonText color="primary"><h3>¡Bienvenido a ITO Responde!</h3></IonText><br />
          </IonCol>
        </IonRow>
        <IonRow >
          <IonCol className="ion-text-center">
            <IonText color="primary" text-center>¡Elige el tipo de consulta que deseas hacer y nosotros te ayudamos!</IonText>
          </IonCol>
        </IonRow>

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

        <IonCard onClick={() => {history.push('/administrativeprocedure')}}>
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