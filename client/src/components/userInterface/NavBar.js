import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { DineIn } from '../pages/DineIn'
import { BookNow } from '../pages/BookNow'
import { OurMenu } from '../pages/OurMenu'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home';


const items = [
    { to: '/', label: 'Home' },
    { to: '/ourmenu', label: 'OurMenu' },
    { to: '/booknow', label: 'BookNow' },
    { to: '/contact', label: 'Contact' },
    { to: '/dineInNow', label: 'Dine-In-Now' },
]

const NavBar = () => {
    return (
        <div>
            <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>Welcome! to Lucky's Restaurant</Navbar.Brand>
                    <Nav>
                        {items.map(({ to, label }) => (
                            <Nav.Link bg="light" key={to} href={to}>{label}</Nav.Link>
                        ))}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="secondary">Search</Button>
                    </Form>       
            </Navbar>
            <Switch>
          <Route path="/dineInNow" component={DineIn}></Route>
          <Route path="/ourmenu" component={OurMenu} ></Route>
          <Route path="/booknow" component={BookNow}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Home}></Route>
          </Switch>
          </Router>
        </div>
    )
}

export { NavBar };
