import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/userInterface/NavBar';

export const App = () => {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path='/'><NavBar/></Route> 
        </Switch>
    </Router>
    </div>
  );
};

