import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck';
import { MenuButtons } from './MenuButtons';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import dessert from '../images/dessert.jpeg';
import food from '../images/food.jpeg';
import drinks from '../images/drinks.jpeg';

const OurMenu = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [menuSelected, setMenuSelected] = useState("");

  useEffect(() => {
    GETDataOfFoodMenu();
  }, []);


  const GETDataOfFoodMenu = () => {
    fetch('/api/foods/', {
    }).then((response) => response.json())
      .then((foodItems) => {
        setFoodMenu(foodItems);
      })
  }

  const handleMenu= (menuName) =>{
    setMenuSelected(menuName);
  }

  return (
    <Jumbotron>
      <Form>
        <Form.Group>
      <CardDeck>
        <MenuButtons header={"Food"} text={"Our menu has been put together by our executive chef Raffaele Fusco. The ingredients have been sourced from all over Western Australia, along with a special selection coming directly from Italy. Come and enjoy the 1934 experience today."} buttonText={"food menu"} image={food} menuOfButtonClicked={handleMenu}/>
        <MenuButtons header={"Drinks"} text={"Drinks are easier described than made, our General Manager Riccardo Zivillica has spent time crafting an exclusive list of wines from  Italy and Australia. There is also an extensive cocktail menu which has been created for every taste."} buttonText={"drinks menu"} image={drinks} menuOfButtonClicked={handleMenu}/>
        <MenuButtons header={"Dessert"} text={"Every meal has to end with a dessert to remember. Not only can you digest your meal with an espresso, you can also enjoy some dessert wine to end the night. Our desserts range from an authentic tiramisù to a mouth watering pannacotta."} buttonText={"dessert menu"} image={dessert} menuOfButtonClicked={handleMenu}/>
      </CardDeck>
      </Form.Group>
      <Form.Group>
        {menuSelected==="food menu"&&
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {foodMenu.map((itemsdetails)=>{
             return <tr key={itemsdetails.id}>
              <td>{itemsdetails.id}</td>
              <td>{itemsdetails.itemname}<br/><label>{itemsdetails.description}</label></td>
              <td>${itemsdetails.price}</td>
            </tr>
            })}
          </tbody>
        </Table>}
        </Form.Group>
        </Form>
        </Jumbotron>
  );
}

export { OurMenu };