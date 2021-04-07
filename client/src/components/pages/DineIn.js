import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron'

const DineIn = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [tableChoosen, setTableChoosen] = useState("");
  const [tables, setTables] = useState(["Table1 - max:4-people", "Table2 - max:4-people", "Table3 - max:6-people", "Table4 - max:6-people", "Table5 - max:8-people", "Table6 - max:8-people", "Table7 - max:10-people", "Table8 -  max:4-people", "Table9 - max:4-people", "Table10 - max:6-people"]);
  let myCurrentTime = new Date().toLocaleString();

  useEffect(() => {
    GETDataOfFoodMenu();
  }, []);

  useEffect(() => {
    console.log("tables changed");
  }, [tables]);


  const GETDataOfFoodMenu = () => {
    fetch('/api/foods/', {
    }).then((response) => response.json())
      .then((foodItems) => {
        setFoodMenu(foodItems);
      })
  }
 
  const handleChangeTable = (e) => {
    console.log(e.target.value);
    setTableChoosen(e.target.value);
  }

  const handleMenuItemChoosen = (menuItemSelected) => {
    console.log(menuItemSelected);
  }

  const handleSubmit = () => {
    console.log(tableChoosen);
    const indexPosition=tables.findIndex((table)=>table===tableChoosen);
    console.log("table index is:", indexPosition);
    tables.splice(indexPosition,1);
    console.log(tables);
    setTables(tables);
  }
  return (
    <Jumbotron>
    <Form>
      <Form.Group>
        <Form.Label>Availabel table's for today on {myCurrentTime}:</Form.Label><br />
        <Form.Label>Please select a table from below list</Form.Label>
        <Form.Control as="select" custom onChange={handleChangeTable}>
          {tables.map((table, index) => <option key={index}>{table}</option>)}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Please choose items to order </Form.Label>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Select</th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {foodMenu.map((itemsdetails) => {
              return <tr key={itemsdetails.id}>
                <td><Form.Check type="checkbox" onChange={()=>{handleMenuItemChoosen(itemsdetails)}}></Form.Check></td>
                <td>{itemsdetails.itemname}<br /><label>{itemsdetails.description}</label></td>
                <td>${itemsdetails.price}</td>
              </tr>
            })}
          </tbody>
        </Table>
        </Form.Group>
        <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
    </Form>
    <Form.Label>Thank you, for your order. Please have a seat on .. table.</Form.Label><br />
    <Form.Label>One of our team member will c u in short time with your order</Form.Label>
    <Button variant="secondary">Click2C-Orders</Button>
    </Jumbotron>
  )
}

export { DineIn };