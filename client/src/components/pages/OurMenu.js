import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import {MenuButtons} from './MenuButtons';
const OurMenu = () => {
    return (
        <CardDeck>
        <MenuButtons header={"food"} text={"Our menu has been put together by our executive chef Raffaele Fusco. The ingredients have been sourced from all over Western Australia, along with a special selection coming directly from Italy. Come and enjoy the 1934 experience today."} buttonText={"food menu"}/>
        <MenuButtons header={"drinks"} text={"Drinks are easier described than made, our General Manager Riccardo Zivillica has spent time crafting an exclusive list of wines from  Italy and Australia. There is also an extensive cocktail menu which has been created for every taste."} buttonText={"drinks menu"}/>
        <MenuButtons header={"dessert"} text={"Every meal has to end with a dessert to remember. Not only can you digest your meal with an espresso, you can also enjoy some dessert wine to end the night. Our desserts range from an authentic tiramisù to a mouth watering pannacotta."} buttonText={"dessert menu"}/>
      </CardDeck>
        // <Jumbotron>
        // <Container>
        // <h1>Today's Recipe:</h1>
        // <p>Ingredients: <br/>
        // 1/2 cup cream cheese <br/>
        // 11/2 tbs pure icing sugar <br/>
        // 1 lemon, zested <br/>
        // 1 cup plain flour <br/>
        // 1 cup caster sugar<br/>
        // 1/4 cup cocoa, plus extra to dust<br/>
        // 1 tsp baking powder<br/>
        // 150g unsalted butter, melted<br/>
        // 1/2 cup milk<br/>
        // 2 free range eggs<br/>
        // 1 tsp vanilla extract<br/>
        // 125g raspberries, plus extra to serve<br/>
        // 2 tsp red food colouring<br/>
        // 200g 70% cocoa dark chocolate, chopped<br/><br/>
        // Method: <br/>
        // 1. Combine cream cheese, icing sugar and zest in a bowl and chill until required.<br/>

        // 2. Place flour, sugar, cocoa, baking powder, butter, milk, eggs, vanilla, 
        // raspberries, food colouring, pinch of salt and half the chocolate in a blender and process for 1 minute or until smooth.<br/>

        // 3. Divide mixture evenly between 4 x 400ml-capacity mugs until three-quarters full. 
        // Top each with remaining chocolate and 11/2 tbs water. Place onto a plate and 
        // microwave for 2 minutes or until puddings have risen – they will still be soft in the centre.
        //  To serve, top with cream cheese mixture and extra raspberries, and dust with extra cocoa.<br/>
        // tip: preparation time + chilling time.
        // </p>
        // </Container>
        // </Jumbotron>
   
    );
}

export {OurMenu};