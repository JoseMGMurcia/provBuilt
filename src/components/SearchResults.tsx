import React, { useState } from 'react';
import { IonButton, IonContent, IonListHeader, IonToolbar, IonItem, IonList, IonSearchbar, IonLabel } from '@ionic/react';


export const SearchResults = () => {

    const [searchText, setSearchText] = useState('');


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



       return <>
      <IonContent className="ion-padding">
        <IonToolbar>
                <IonSearchbar slot="start" 
                value={searchText} onIonChange={e => setSearchText(e.detail.value!)} 
                placeholder="Buscar..." 
                showCancelButton="focus"/>
        </IonToolbar>
        {results.map((result) => (

            <IonList className="ion-margin">
                <IonListHeader><h3>{result.type}</h3></IonListHeader>
                <IonItem > 
                    <IonList >
                        {result.list.map((resultList) => (

                                <IonItem color="tertiary"  className="ion-margin">
                                    <IonLabel>
                                        <h2>{resultList.name}</h2>
                                        <h6>{resultList.text}</h6>
                                    </IonLabel>
                                </IonItem>

                        ))}
                    </IonList>
                </IonItem>
            </IonList>
        ))}




       
      </IonContent>
       </>
   }

export default SearchResults
