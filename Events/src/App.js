import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/* PÁGINAS */
import Login from './view/login/';
import Register from './view/register/';
import Home from './view/home'; 
import RecoverPassword from './view/recover-password';
import EventRegister from './view/event-register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/recoverpassword' component={RecoverPassword} />
        <Route exact path='/eventregister' component={EventRegister} />
      </Router>
    </Provider>
  );
}

export default App;
