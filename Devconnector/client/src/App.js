import React, { Fragment} from 'react';
import {BrowserRouter as Router,Routes, Route,Link} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
const App = () => (
  <Router>
    <Fragment> 
      <Navbar />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  </Router>
);


export default App;