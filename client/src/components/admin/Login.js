import React,{useState} from 'react'
import { useHistory } from "react-router";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { OperationsOfAdmin } from "./OperationsOfAdmin";

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: '',
    password: ''
  })
  const changeHandler = (e) => {
    const newFormState = { ...form };
    newFormState[e.target.name] = e.target.value;
    console.log(newFormState);
    setForm(newFormState)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("inside submit form");
    fetch('/api/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem('token', data.token)
        if (data.token) {
          history.replace('/')
        }
      })
  }
    return (
        <Router>
        <Form onSubmit={submitHandler} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter user-name" value={form.name} onChange={changeHandler} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" value={form.password} onChange={changeHandler}/>
            </Form.Group>
           
            <Button variant="info" type="submit"><Link to='/admin'>Submit</Link></Button>
        </Form>
        <Switch>
          <Route path='/admin'><OperationsOfAdmin/></Route>
        </Switch>
        </Router>
    )
}

export { Login };



