import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OperationsOfAdmin } from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { Footer } from './components/userInterface/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About'
import { BookNow } from './components/pages/BookNow'
import { OurMenu } from './components/pages/OurMenu'
import { Contact } from './components/pages/Contact'

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
    <Router>
      <Link to="/admin">Please Click here to do:Admin Operations</Link>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/ourmenu" component={OurMenu} ></Route>
          <Route path="/booknow" component={BookNow}></Route>
          <Route path="/contact" component={Contact}></Route>
          {/* <Route path="/shop/:id"><ItemsDisplay cart={cart} seCart={setCart}/></Route> */}
          <Route path='/admin'><OperationsOfAdmin/></Route>
          <Route path='/'><NavBar cart={cart}/><Home/></Route>  
          
        </Switch>
    </Router>
    </div>
  );
};

