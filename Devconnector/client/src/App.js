import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/" element={<Landing />} />
        <Alert />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
