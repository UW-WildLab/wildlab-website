import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GoogleSheetsProvider from 'react-db-google-sheets';
import Routes from './Routes';
import { Footer, NavBar } from './components';

import './App.css';

const App = () => (
  <GoogleSheetsProvider>
    <Router>
      <div className="site">
        <div className="site_fullwidth site_fullwidth_boxed clearfix">
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </div>
    </Router>
  </GoogleSheetsProvider>
);

export default App;
