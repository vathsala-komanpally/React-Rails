import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { CategoriesNavBar } from './CategoriesNavBar';
import FormControl from 'react-bootstrap/FormControl'


const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/ourmenu', label: 'OurMenu' },
    { to: '/booknow', label: 'BookNow' },
    { to: '/contact', label: 'Contact' },
]

const NavBar = (props) => {
    const [cart, setCart] = useState([]);

    const handleCart = () => {
        //setCart(props.cart);
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand>Welcome! to Grocery Page</Navbar.Brand>
                    <Nav>
                        {items.map(({ to, label }) => (
                            <Nav.Link bg="light" key={to} href={to}>{label}</Nav.Link>
                        ))}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="secondary">Search</Button>
                    </Form> 
                    <Button variant="light" onClick={handleCart}>Cart  {props.cart.length}</Button>
                       
            </Navbar>
        </div>
    )
}

export { NavBar };
