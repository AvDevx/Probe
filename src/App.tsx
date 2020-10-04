// Importing react.
import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing theme style.
import './theme/app.css';

import Header from './Header';



const App: React.FC = () => (
  <div className="app">
    <Header />
    <Router></Router>
  </div>
);

export default App;
