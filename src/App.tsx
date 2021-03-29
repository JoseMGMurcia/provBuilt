import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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


/*   Pages         */
import Mailbox from './pages/Mailbox';
import AdministrativeProcedure from './pages/AdministrativeProcedure';
import Rights from './pages/Rights';
import StudentAttention from './pages/StudentAttention';
import WebSupport from './pages/WebSupport';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/mailbox" component={Mailbox} />
        <Route path="/studentatention" component={StudentAttention} />
        <Route path="/administrativeprocedure" component={AdministrativeProcedure} />
        <Route path="/rigths" component={Rights} />
        <Route path="/websupport" component={WebSupport} />


      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
