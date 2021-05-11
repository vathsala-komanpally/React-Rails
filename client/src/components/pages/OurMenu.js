import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck';
import { MenuButtons } from './MenuButtons';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import dessert from '../images/dessert.jpeg';
import food from '../images/food.jpeg';
import drinks from '../images/drinks.jpeg';
import PrintMenuList from './PrintMenuList';
import { getFoodMenu } from '../../api/getFoodMenu';
import { getDrinkMenu } from '../../api/getDrinkMenu';
import { getDessertMenu } from '../../api/getDessertMenu';

const OurMenu = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinkMenu, setDrinkMenu] = useState([]);
  const [dessertMenu, setDessertMenu] = useState([]);
  const [menuSelected, setMenuSelected] = useState("");

  useEffect(() => {
    getFoodMenu().then((foodItems)=>{setFoodMenu(foodItems)});
    getDrinkMenu().then((drinkItems)=>{setDrinkMenu(drinkItems)})
    getDessertMenu().then((dessertItems)=>{setDessertMenu(dessertItems)})
  }, []);

  const handleMenu= (menuName) =>{
    setMenuSelected(menuName);
  }

  return (
    <Jumbotron>
      <Form>
        <Form.Group>
      <CardDeck>
        <MenuButtons header={"Food"} text={"The ingredients have been sourced from all over Western Australia, along with a special selection. Come and enjoy our experience today."} buttonText={"food menu"} image={food} menuOfButtonClicked={handleMenu}/>
        <MenuButtons header={"Drinks"} text={"Drinks are easier described than made, our team has spent time for list of wines in Australia. There is also an special menu which has been created for every taste."} buttonText={"drinks menu"} image={drinks} menuOfButtonClicked={handleMenu}/>
        <MenuButtons header={"Dessert"} text={"Every meal has to end with a dessert thats not only can you digest meal quickly, also enjoy some dessert to end the night"} buttonText={"dessert menu"} image={dessert} menuOfButtonClicked={handleMenu}/>
      </CardDeck>
      </Form.Group>
      <Form.Group>
        {menuSelected==="food menu"&&<PrintMenuList menu={foodMenu}/>}
        {menuSelected==="drinks menu"&&<PrintMenuList menu={drinkMenu}/>}
        {menuSelected==="dessert menu"&&<PrintMenuList menu={dessertMenu}/>}
        </Form.Group>
        </Form>
        </Jumbotron>
  );
}

export { OurMenu };