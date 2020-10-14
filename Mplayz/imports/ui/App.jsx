import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './components/Home';
import AccountProfil from  './components/AccountProfil'

import 'react-toastify/dist/ReactToastify.css';
import '../../public/src/css/layout/normalize.css';
import '../../public/src/css/layout/header.css';
import '../../public/src/css/layout/layout.css';

import '../../public/src/css/components/showcase.css';
import '../../public/src/css/components/accept.css';
import '../../public/src/css/components/account-profil.css';

import '../../public/src/css/utilities/_colors.css';
import '../../public/src/css/utilities/_fonts.css';

const App = () => {
  return(
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/accountprofil" component={AccountProfil} />
        </Switch>
      </Router>
    </>
  );
};

export default App;