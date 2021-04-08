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
      headers: {
        'token': window.localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((foodItems) => {
        setFoodMenu(foodItems);
      })
  }

  const GETDataOfDrinkMenu = () => {
    fetch('api/drinks/',{
      headers: {
        'token': window.localStorage.getItem('token')
      }
    }).then((response)=>response.json())
    .then((drinkItems)=>{
      setDrinkMenu(drinkItems);
    })
  }
  const GETDataOfDessertMenu = () => {
    fetch('api/desserts/',{
      headers: {
        'token': window.localStorage.getItem('token')
      }
    }).then((response)=>response.json())
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
