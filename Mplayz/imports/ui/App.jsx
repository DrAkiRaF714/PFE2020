import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './components/pages/Home';
import AccountProfil from  './components/pages/AccountProfil'
import SelectMultipost from  './components/pages/SelectMultipost'
import StudioProfil from './components/pages/StudioProfil';
import ContactPopup from './components/ContactPopup';

import 'react-toastify/dist/ReactToastify.css';
import '../../public/src/css/layout/normalize.css';
import '../../public/src/css/layout/header.css';
import '../../public/src/css/layout/layout.css';

import '../../public/src/css/components/showcase.css';
import '../../public/src/css/components/accept.css';

import '../../public/src/css/utilities/_colors.css';
import '../../public/src/css/utilities/_fonts.css';


const App = () => {
  return(
    <>
      <ToastContainer />
      <ContactPopup />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/accountprofil" component={AccountProfil} />
          <Route  path="/upload" component={SelectMultipost} />
          <Route  path="/studio" component={StudioProfil} />
        </Switch>
      </Router>
    </>
  );
};



export default App;