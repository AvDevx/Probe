// Importing react.
import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing theme style.
import './theme/app.css';

import Header from './Header';
import GameCard from './GameCard'



const App: React.FC = () => (
  <div className="app">
    <Header />
    <Router>
      <Switch>
        <Route path="/game">
          <GameCard />
        </Route>
        <Route path="/">
          
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
