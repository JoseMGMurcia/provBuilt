import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';

/*   Pages         */
import Home from './pages/Home';
import Mailbox from './pages/Mailbox';
import AdministrativeProcedure from './pages/AdministrativeProcedure';
import Rights from './pages/Rights';
import Withdrawal from './pages/Withdrawal';
import StudentAttention from './pages/StudentAttention';
import WebSupport from './pages/WebSupport';

const Routes = () => (
  <IonRouterOutlet  id="main"> 
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path='/home' component={Home}  />
    <Route path="/mailbox" component={Mailbox} />
    <Route path="/studentatention" component={StudentAttention} />
    <Route path="/administrativeprocedure" component={AdministrativeProcedure} />
    <Route exact path="/rigths" component={Rights} />
    <Route path="/rigths/withdrawal" component={Withdrawal} />
    <Route path="/websupport" component={WebSupport} />
  </IonRouterOutlet>
);

export default Routes;
