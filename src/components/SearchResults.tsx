import React, { useState } from 'react';
import { IonButton, IonContent, IonText, IonToolbar, IonItem, IonList, IonSearchbar, IonLabel, IonIcon, IonTitle, IonItemDivider, IonCard } from '@ionic/react';
import './Modal.css';
import { trash } from 'ionicons/icons';


export const SearchResults = () => {

    const [searchText, setSearchText] = useState(false);


    const results = [
        {
            type: "Papeleo", 
            list:[
                {
                    name: "cursos",
                    text: "en los cursos hay cosas de cursos"
                },
                {
                    name: "matriculas",
                    text: "las matriculas cuestan pasta"
                },
                {
                    name: "certificado",
                    text: "Si todo va bien tendrás uno"
                },
        ]},
        {
            type: "Lecciones", 
            list:[
                {
                    name: "empezar",
                    text: "dale al play"
                },
                {
                    name: "pasar",
                    text: "leetelo todo"
                },
                {
                    name: "parar",
                    text: "al stop"
                },
                {
                    name: "atrás",
                    text: "Dale a la flechita para atrás"
                },
        ]},
        {
            type: "Examenes", 
            list:[
                {
                    name: "Aprobar",
                    text: "Necesitas un 70% de respuestas correctas"
                },
                {
                    name: "suspender",
                    text: "Menos del 70% de aciertos"
                }           
        ]},
        
    ]

    function close() {
        console.log("closing");
    }

       return <>
        <IonContent>
        <IonToolbar className="yellowBack">
            <IonTitle  className="ion-text-justify">Busqueda</IonTitle>
            <IonButton slot="end"  color="warning"  className="no-shadow"  onClick={() => close()}>
                <IonIcon icon={trash} slot="icon-only"></IonIcon>
            </IonButton>
        </IonToolbar>
            <IonToolbar>
                <IonSearchbar 
                    slot="start" 
                    onIonChange={(e) => 
                            setSearchText(true)
                    } 
                    placeholder="Buscar..." 
                    debounce={200}
                    />
            </IonToolbar>
            <IonList hidden={searchText}>
                {results.map((result) => (
                    <IonItem key={result.type} className="clearBorder"> 
                        <IonCard>
                            <IonText><h5>{result.type}</h5></IonText>
                            <IonList >
                                {result.list.map((resultList) => (
                                    <IonItem color="dark"  className="result" key={result.type+resultList.name}>
                                        <IonLabel color="primary" >
                                            <h2>{resultList.name}</h2>
                                            <h6>{resultList.text}</h6>
                                        </IonLabel >
                                    </IonItem>
                                ))}
                            </IonList>
                        </IonCard>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
       </>
   }

export default SearchResults;
