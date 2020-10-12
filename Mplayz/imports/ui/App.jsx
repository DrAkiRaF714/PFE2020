import React from 'react';
import Layout from './components/layout/_layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Showcase from './components/ShowCase';


const App = () => {
  return(
    <Layout>
      <ToastContainer />
      <h1>Welcome to Mplayz!</h1> 
      <Showcase />
    </Layout>
  );
};

export default App;