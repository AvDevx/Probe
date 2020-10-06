// Importing react.
import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing theme style.
import './theme/app.css';

import Header from './Header';
import GameCard from './GameCard';
import LandingScreen from './LandingScreen';



const App: React.FC = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/game">
          <Header />
          <GameCard />
        </Route>
        <Route path="/">
          <LandingScreen />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
