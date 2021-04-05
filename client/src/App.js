import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OperationsOfAdmin } from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { Home } from './components/pages/Home';

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
    <Router>
      <Link to="/admin">Please Click here to do:Admin Operations</Link>
        <Switch>
          <Route path='/admin'><OperationsOfAdmin/></Route>
          <Route path='/'><NavBar cart={cart}/></Route>  
        </Switch>
    </Router>
    </div>
  );
};

