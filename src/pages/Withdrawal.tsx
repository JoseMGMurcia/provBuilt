import React from "react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, 
         IonButtons, IonBackButton, IonText } from "@ionic/react";
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
        <IonContent fullscreen color="dark" className="ion-text-justify">
       

        <IonCard>
            <IonText>
                <h6>Tanto el Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General 
                para la Defensa de los Consumidores y Usuarios y otras leyes complementarias (en adelante, "TRLGDCU"), como la Directiva 
                2011/83/UE del Parlamento Europeo y del consejo de 25 de octubre de 2011 sobre los derechos de los consumidores definen 
                el concepto de derecho de desistimiento y otros conceptos conexos y establecen y fijan los procedimientos para su ejercicio.</h6>
                <h6>En base a lo anetiormente expuesto, y aún cuando al alumno ya se le habrá informado de todos estos aspectos en la entrevista 
                de acceso a la formación, el ALUMNO por medio de la firma del correspondiente contrato acepta expresamente que <b>no podrá 
                ejercitar dicho derecho, de desistimiento, una vez transcurridos los catorce días naturales desde el pago total o el pago 
                del primer plazo</b> si esta es la forma elegida.<br/></h6>
                <h6>Asimismo, al alumnado se le comunicará la fecha prevista para el inicio del Master.<br/></h6>
                <h6>Como garantía de devolución y compromiso por parte de la empresa del cumplimiento de los plazos, en el supuesto de que el 
                Máster no comience en los 10 días naturales posteriores al plazo previsto para su inicio, se devolverá la cantidad abonada.</h6>
                <h6><b>MECANISMO PARA EJERCER EL DERECHO DE DESISTIMIENTO</b></h6>
                <h6>La empresa pone a disposición del alumno un formulario de desistimiento que podrá descargar desde el siguiente ENLACE:</h6><br/>
                <a href="https://drive.google.com/file/d/1R1qHKzPZ7WMtnt0HTrNECooSSDqLtfUa/view">https://ito-go.com/desistimiento</a><br/>
                <h6>El derecho de desistimiento se podrá ejercer mediante correo electrónico enviado a <b>gestion@ito.digital</b> debiendo establecer 
                en el asunto "devolución de (producto comprado)". Si procede, la devolución del importe se efectuará dentro de los 14 días 
                naturales siguientes desde la fecha en que se haya realizado tal comunicación.'<br/></h6>
                <h6>Además, si hubiese problemas para descargar el formulario, podrá usar la siguiente plantilla:<br/></h6>
                <h6>Devolución de producto/servicio adquirido<br/></h6>
                <h6>Nombre y apellidos:_____________ Email de contacto:_____________ Producto comprado:_____________ Fecha de compra:_____________<br/></h6>
                <h6>Por medio del presente escrito, solicito la devolución del producto/servicio antes reseñado solicitando devolución del dinero 
                en el siguiente número de cuenta:_____________<br/></h6>
                <h6>Lugar y fecha de la reclamación:_____________</h6>
            </IonText>
            
      
       

        </IonCard>



      </IonContent>
    </IonPage>
    );
};

export default Withdrawal;