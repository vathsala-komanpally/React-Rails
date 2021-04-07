import React, { useState, useEffect } from 'react'

const MenuItemsData=() =>{
  const [foodMenu, setFoodMenu] = useState([]);
  const [drinkMenu, setDrinkMenu] = useState([]);
  const [dessertMenu, setDessertMenu] = useState([]);

  useEffect(() => {
    GETDataOfFoodMenu();
    GETDataOfDrinkMenu();
    GETDataOfDessertMenu();
  }, []);


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
    return (
        <div>
            
        </div>
    )
}

export {MenuItemsData}
