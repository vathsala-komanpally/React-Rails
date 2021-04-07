import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {PrintMenuItemsToSelect} from './PrintMenuItemsToSelect';

const DineIn = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinkMenu, setDrinkMenu] = useState([]);
  const [dessertMenu, setDessertMenu] = useState([]);
  const [tableChoosen, setTableChoosen] = useState("");
  const [itemsOrdered, setItemsOrdered] = useState([]);
  const [tables, setTables] = useState(["Table1 - max:4-people", "Table2 - max:4-people", "Table3 - max:6-people", "Table4 - max:6-people", "Table5 - max:8-people", "Table6 - max:8-people", "Table7 - max:10-people", "Table8 -  max:4-people", "Table9 - max:4-people", "Table10 - max:6-people"]);
  let myCurrentTime = new Date().toLocaleString();
  const [clicked2C,setClicked2C]=useState("false");
  const [orderList, setOrderList]=useState([]);

  useEffect(() => {
    GETDataOfFoodMenu();
    GETDataOfDrinkMenu();
    GETDataOfDessertMenu();
  }, []);

  useEffect(() => {
    setTables(tables);
    setItemsOrdered(itemsOrdered);
  }, [tables, itemsOrdered,orderList]);

  const GETDataOfFoodMenu = () => {
    fetch('/api/foods/', {
    }).then((response) => response.json())
      .then((foodItems) => {
        setFoodMenu(foodItems);
      })
  }

  const GETDataOfDrinkMenu = () => {
    fetch('api/drinks/',{}).then((response)=>response.json())
    .then((drinkItems)=>{
      setDrinkMenu(drinkItems);
    })
  }
  const GETDataOfDessertMenu = () => {
    fetch('api/desserts/',{}).then((response)=>response.json())
    .then((dessertItems)=>{
      setDessertMenu(dessertItems);
    })
  }
 
  const handleSelectedTable = (e) => {
    setTableChoosen(e.target.value);
  }

  const handleMenuItemChoosen = (menuItemSelected) => {
    const filteredItem=itemsOrdered.filter((item)=>item.itemname===menuItemSelected.itemname);
    if(filteredItem.length==0){
    setItemsOrdered([...itemsOrdered,{tableName:tableChoosen, itemname:menuItemSelected.itemname, price: menuItemSelected.price}]);
  }else if(filteredItem.length==1){
    const indexOfItem=itemsOrdered.findIndex((item)=>item.itemname===menuItemSelected.itemname);
  console.log("index:", indexOfItem);
    itemsOrdered.splice(indexOfItem,1);
}
  }

  const handleSubmit = () => {
    const indexPosition=tables.findIndex((table)=>table===tableChoosen);
    tables.splice(indexPosition,1);
    setOrderList([...orderList, ...itemsOrdered]);
    setItemsOrdered([]);// look at this later
  }

  const handleClick2C = () =>{
    setClicked2C("true");
  }

  return (
    <Jumbotron>
    <Form>
      <Form.Group>
        <Form.Label>Availabel table's for today on {myCurrentTime}:</Form.Label><br />
        <Form.Label>Please select a table from below list</Form.Label>
        <Form.Control as="select" custom onChange={handleSelectedTable}>
          {tables.map((table, index) => <option key={index}>{table}</option>)}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Please choose items to order: </Form.Label><br/>
        <Form.Label style={{background:"lightblue",float: "left", padding:10}}>Food Menu :</Form.Label>
        <PrintMenuItemsToSelect Menu={foodMenu} handleMenuItemChoosen={handleMenuItemChoosen}/>
        <Form.Label style={{background:"lightblue",float: "left", padding:10}}>Drinks Menu :</Form.Label>
        <PrintMenuItemsToSelect Menu={drinkMenu} handleMenuItemChoosen={handleMenuItemChoosen}/>
        <Form.Label style={{background:"lightblue",float: "left", padding:10}}>Desserts Menu :</Form.Label>
        <PrintMenuItemsToSelect Menu={dessertMenu} handleMenuItemChoosen={handleMenuItemChoosen}/>
        </Form.Group>
        <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
    </Form>
    <Form.Label>Thank you, for your order. Please have a seat on .. table.</Form.Label><br />
    <Form.Label>One of our team member will c u in short time with your order</Form.Label>
    <Button variant="secondary" onClick={handleClick2C}>Click2C-Orders</Button>
    {clicked2C==="true"&&
    <Card>
      {orderList.map((item, index)=>{
    return <CardGroup key={index}>
      <Card.Body>
      <Card.Text>{item.tableName.substr(0,7)}-{item.itemname}-${item.price}</Card.Text>
      </Card.Body>
      </CardGroup>})}
    </Card>}
    </Jumbotron>
  )
}

export { DineIn };