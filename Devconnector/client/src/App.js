import React, { Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import Landing from './components/layout/Landing';

const App =()  => (
  <Router>
    <Fragment>   
    <Navbar />
    < Route exact path='/' component={Landing} />
    </Fragment>
  </Router>
);

export default App;
