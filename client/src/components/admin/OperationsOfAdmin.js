import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {AddItem} from "./AddItem";
import {UpdateItem} from "./UpdateItem";
import {DeleteItem} from "./DeleteItem";
import Button from 'react-bootstrap/Button';

const OperationsOfAdmin = () => { 
    return (
        <Router>
        <div>
        <div className="operationsofadmin">
            <h2>List of things Admin can do here:</h2>
            <div className="addItemInfoUser">
                <p className="addItemInfo">Click on Add: <br/>
                To add new item in the items table<br/>
                </p>
                <Link to="/item/create">
                <Button variant="info" id="add" className="btn btn-primary" >Add</Button>
                </Link>
            </div>
            <div className="updateItemInfoUser">
                <p className="updateItemInfo">Click on update: <br/>
                To update existing item deatils <br/>
                </p>
                <Link to="/item/update">
                <Button variant="info" id="update" className="btn btn-primary">Update</Button>
                </Link>
                
            </div>
          
            <div className="deleteItemInfoUser">
                <p className="deleteItemInfo">Click on Delete: <br/>
                To delete an item from particular category<br/>
                </p>
                <Link to="/item/delete">
                <Button variant="info" id="delete" className="btn btn-primary">Delete</Button>
                </Link>
                
            </div>
            </div>
            <Switch>
           
            <Route path="/item/create"><AddItem/></Route>
            <Route path="/item/update"><UpdateItem/></Route>
            <Route path="/item/delete"><DeleteItem /></Route>
            </Switch>
      </div>
      </Router>
       
           
      
    )
}

export {OperationsOfAdmin};
